---
title: "HCI Paper Reviews"
description: "Random ramblings on papers I've read recently"
date: 2026-07-03
---

This summer I'm trying to learn more about the fields of research I'm interested in. One field that I'm interested in is **HCI (Human Computer Interaction)**.

I took the undergrad HCI class (CS 475) for my last semester at Purdue. The class itself was a very broad introduction to many of the areas of interest in this broad field. Writing this post has made me realize that giving a narrow definition of what HCI is quite difficult. This field is incredibly broad. Wikipedia defines [HCI](https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction) as:

> Human–computer interaction (HCI) is the process through which people operate and engage with computer systems.

That sounds very straightforward but also doesn't really tell us what kinds of research or advancements are done in the field of HCI.

In this post, I will do my best attempt at reviewing and discussing some of the papers I've read. I hope doing this would help me become a better researcher and it would be a fun attempt at trying to explain difficult topics in simpler terms too.

## How I found the papers

Most of the papers I've read recently are from [CHI 26'](https://chi2026.acm.org/). [ACM](https://en.wikipedia.org/wiki/Association_for_Computing_Machinery) [SIGCHI](https://sigchi.org/) (Special Interest Group on Computer-Human Interaction) is the largest interdisciplinary society dedicated to the research, design, and practical application of Human-Computer Interaction (HCI). Their flagship research conference, [ACM CHI Conference on Human Factors in Computing Systems](https://dl.acm.org/conference/CHI), happened back in April of this year in Barcelona, Spain.

When I took my undergrad HCI class, my professor, [Sooyeon Jeong](https://www.sooyeonjeong.com/), structured the class in a way where each week she introduced a different topic in HCI and we had weekly readings related to that topic. Many of the readings were past CHI conferences papers, so that's how I got familiar with reading HCI conference papers.

I attended some events on campus where I got to meet and talk to faculty that do research in HCI. Some of the professors I talked to include [Jason Wu](https://jasonwunix.com/), [Aniket Bera](https://ideas.cs.purdue.edu/people/), [Qiyue (Shirley) Xue](https://xueqiuyue.com/), and also of course [Tianyi Zhang](https://tianyi-zhang.github.io) (I did research at his lab and knew him previously). I am connected to all of them on LinkedIn lol.

I often see them reposting posts from their peers or other researchers. Actually, almost all the papers I've read outside of class are from papers I see them reposting on LinkedIn. These papers are usually recently submitted conference papers so it's definitely cutting-edge research.

## Paper Reviews

All papers I explain in this post were submitted to conferences this year. I'll attempt to explain each paper and give some of my thoughts on it.

_Note: you can click on the footnote number at the beginning of each paper title and that will take you to end where I list all the citations, you can click on the doi link to read the paper as a pdf._

## Paper 1

> [^1] WatchHand: Enabling Continuous Hand Pose Tracking On Off-the-Shelf Smartwatches

This paper by researchers from Cornell and KAIST seems like it could be largely impactful.

<img src="https://scx2.b-cdn.net/gfx/news/2026/sonar-on-stock-smartwa.jpg" width="700">

They present _WatchHand_, a fully software-based system that allows for tracking of the full **3D pose of the user's hand** (represented by a 3D pose with all 20 joints of the hand) using nothing but the speaker and microphone that are already built into a normal, off-the-shelf smartwatches. Like no extra sensors, no custom hardware, no cameras are needed.

They implemented this system on three different commercial smartwatches running on [WearOS](https://en.wikipedia.org/wiki/Wear_OS) (Google's smartwatch operating system): Samsung Galaxy Watch 7, Xiaomi Watch 2 Pro, and Google Pixel Watch 3.

Here's my attempt at explaining the algorithm they use for the system:

### Step 1: Data Capture

The watches can emit inaudible frequencies/signals (18–21 kHz range, and human hearing tops out at 20kHz with most adults having an even lower range).

They use [FMCW](https://www.radartutorial.eu/02.basics/Frequency%20Modulated%20Continuous%20Wave%20Radar.en.html) (Frequency-Modulated Continuous Wave) signals, which are waves continuously sweep from low to high (or back), repeated over and over. Sweeping the frequency, rather than sending one pitch, lets the system extract much more precise distance information from the echo. An individual sweep cycle is called a _chirp_.

Using the chirps emitted from the watch speakers and the microphone simultaneously recording the chirps, the watch records a single, continuous, messy audio recording. Then the goal of the system to then take that recording and turn it into a clean picture of how **far away each reflecting surface is**, and **how that changes over time**.

### Step 2: Data Preprocessing

The microphone records all audio in the room so a lot of preprocessing is needed to clean up the audio before the full _echo profile_ is constructed. The audio is first passed through a bandpass filter, keeping only frequencies in the 18–21 kHz chirp band.

Then they do some math stuff I don't understand to **synchronize** the recording based on the chirp, which means they split continuous recording into individual chirp-sized chunks that line up correctly with each transmitted chirp cycle. Each chunk is called an _echo frame_ and the recording becomes a huge 1D array.

Next, they take the _echo frames_ produced from every chirp cycle then stack them side by side in ordered by time. This reshapes the 1D array into a 2D grid/image with:

- x-axis = time
- y-axis = distance

Each square forms a pixel in the image and the brightness of each pixel represents how strong the echo was at that distance, at that moment. This 2D image is called the _echo profile_.

They then apply some more noise removal stuff and on the _echo profile_ (I don't really understand this part either, reference section _3.3.2 Differential Echo Profiles_ in the paper).

They also do some more clean up of the timing jitter/drift specific to each smartwatch's audio hardware, so the image stays consistent across devices.

Finally, the collected data is now ready to be used to train their image recognition model.

### Step 3: Deep Learning

The _echo profile_ isn't enough to construct the 3D pose of the hand so they train models to learn which visual patterns in the _echo-profile_ image statistically correspond to which configuration of joints in the hand (e.g. _index finger curled_, _middle finger curled_, or _index and middle finger raised_).

They tested a few models like [ResNet-18](https://arxiv.org/pdf/1512.03385) (classic CNN model) and [CNN-LSTM](https://www.sciencedirect.com/science/article/abs/pii/S0378779622001389), but found that models from the [FastViT](https://arxiv.org/pdf/2303.14189) family (specifically [FastViT-T12](https://arxiv.org/pdf/2303.14189)) performed the best.

FastViT is a hybrid of a [CNN](https://en.wikipedia.org/wiki/Convolutional_neural_network) (Convolutional Neural Network) and [Vision Transformer](https://en.wikipedia.org/wiki/Vision_transformer) developed by Apple. I'm not exactly sure how they combined the two together; I'm too lazy to read another paper so I'll just link the full paper [here](https://arxiv.org/pdf/2303.14189).

FastViT takes the _echo-profile_ image processed and outputs a list of 60 numbers which correspond to the **20 joints of the hand** (numbers 1, 2, 3 → the (x,y,z) position of joint #1; 2, 3, 4 for joint #2 and so on). Note: the coordinates are offsets relative to the wrist (fixed at 0,0,0).

Using the 20 joints, you get the final output which is the **full 3D pose of your hand**.

### Study Design

They did a 4 separate studies with 40 participants in total to test the system.

- Study 1 is the main test that sees if the system works at all, across different watches/hands.
- Study 2 tests whether the body posture matters (watch-raised vs. arm-resting down).
- Study 3 tests whether the system survives real-world noise like loud music, another person walking nearby, the participant themselves walking, and altered hand poses.
- Study 4 tests whether the system can track fast, continuous, natural movement.

They used 3 protocols for these studies:

| Protocol         | What's being tested                                                                | Difficulty                                              |
| ---------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `Within-Session` | Model is tested on the same wearing session, nothing changes (watch never removed) | Easiest                                                 |
| `Cross-Session`  | Watch removed and re-worn later                                                    | Moderate                                                |
| `Cross-User`     | Testing on a person the model never trained on                                     | Hardest (but also tests of the model truly generalizes) |

Honestly, reading the procedures of all 4 studies has fried my brain. I don't really have the mental capacity to explain the results for each study in detail so I'll just give a general overview.

### Discussion

The study confirmed the same consistent ranking of the 3 protocols: _within-session_ has the **lowest** average joint error, then _cross-session_ having **moderate** error, and _cross-user_ having the **highest**. This proves that _WatchHand_ does behave the way similar wearable sensing systems typically do.

I'm not exactly sure how to interpret the results and know if it proves that their system is the best or is good enough to be scaled to all commercial watches, but the error numbers seem low enough lol.

Anyways why should you care about this? I realized I haven't actually answered that yet.

They have a section at the end explaining the potential applications of this system. One application is **gesture-based interaction**, or being able to interact with devices through natural hand movements without requiring physical touch. For example, you could make a certain gesture with your fingers and be able to _control music playback while cooking_, _navigate slides during a presentation_, or _issue commands_.

Another application is for **assistive technologies** like helping people with limited mobility or speech in daily life. I think maybe someone could apply _WatchHand_ into a program that translates the user's gestured sign language into spoken text (like program that takes ASL and outputs English).

They also mention the possibility of **extending cross-device interaction**. E.g. when paired with smartphones, tablets, or smart glasses, smartwatches running _WatchHand_ could serve as lightweight and low-cost, wrist-mounted input devices for [spatial interfaces](https://www.trace3d.app/augmented-reality-fundamentals/what-are-spatial-interfaces).

In conclusion, this was quite a long paper (21 pages!) but was very rewarding for me to read and understand. I'm really interested in HCI research that is related to Bioinformatics, so I think this counts.

I'm remembering the stuff I learned in my HCI class. I think this paper can be categorized as an [Artifact Paper](https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2012.pdf), as it introduces a newly invented technology, interface, toolkit, or physical device.

My prof explained the framework used by the top HCI conferences, [Seven Research Contributions in HCI](https://faculty.washington.edu/wobbrock/pubs/Wobbrock-2012.pdf), which includes the definitions of types of HCI papers. I thought it was kinda boring during lecture but I guess I am finally applying this information when reading all of these papers.

## Paper 2

> [^2] Texterial: A Text-as-Material Interaction Paradigm for LLM-Mediated Writing

This is also a paper submitted to CHI 26', this time by [Microsoft Research](https://www.microsoft.com/en-us/research/about-microsoft-research/).

<img src="https://www.microsoft.com/en-us/research/wp-content/uploads/2026/03/Texterial-figure1.png" width="700">

Honestly, I've never seen anything like this before, I don't really know how to explain what this paper is in text. I recommend you to first watch this [demo video](https://www.linkedin.com/posts/jocelyn-shen_chi2026-activity-7434619614883373056-lzRI) presented by the researchers that shows how it works. Then I'll give some of my comments on what I think. I won't attempt to explain it in detail like the previous paper lmao.

This paper presents 2 novel ways on using LLMs in writing with a visual twist. They propose that instead of asking an LLM to edit your writing by typing a prompt, what if you could manipulate your text physically using the metaphor of **molding clay** or **tending a garden**.

When creating the formative study for the prototypes, the researchers consulted creative professionals, showing them "material" cards (clay, plants, embroidery, photography, etc.) and asking them to imagine writing as if text were that material.

<img src="https://i.imgur.com/dYWQuqj.png" width="600">

The first prototype is _Text as Clay_ where different gestures would result in the selected portion of the text being changed in a certain way. Looking at the gestures from the figure above, the writing actions mapping onto material actions does make intuitive sense to me.

For example, pinching in the clay would condense it so summarizing/making the pinched text shorter also makes sense. They noted that this prototype could work as a tool for text refinement.

<img src="https://i.imgur.com/6B1K3YD.png" width="800">

The second prototype, _Text as Plants_, is more focused on idea generation/brainstorming rather than refining text. They use the metaphor of planting a seed for a plant as creating a topic/idea, then actions like _watering_, _pruning leaves_, and _grafting a plant with another_ to _develop_, _remove_, and _combine ideas_.

I appreciated that in the appendix of the paper, they actually provide all the prompts used and outline how each transformation of a text is done. After reading it, it doesn't seem as complicated as I thought it'd be (mostly just prompt engineering).

Although these prototypes are unique and fascinating, the main value of this paper (and HCI research in general) is understanding **how the design choices of the prototype impacts the behavior of the users**.

### Study Design

The question this study aims to explore would be **how framing text as material changes how people think about writing**.

They conducted a study with four focus groups of various expertise in writing. Each group interacted with the two prototypes, _Text as Clay_ and _Text as Plants_, allowing for them to compare the two metaphors. Conducting this study in focus groups was important as it allowed the participants to build on each other's reactions and disagreements in real time.

The main points include:

- **Metaphors shape mental models**: the different choices of material metaphors led to people thinking about writing differently.
  - Clay sculpting was more for sculpting/refining existing prose, while plants was about nurturing/growing ideas over time.
  - In other words, the choice of metaphor changed what kind of writing task people used the tool for.
- **Gestures vs prompting LLMs**: participants said that using the gestures felt more direct and efficient than typing in a prompt.
  - Users didn't need to find the "right words" to describe an edit.
  - Using gestures made writing feel more expressive and language-agnostic (in CS terms means it's not dependent on your knowledge of a certain programming language, but in this context I mean it's more intuitive/universal).
- **Spatial Layout and Visual Design**: the participants viewed the spatial layout and visual overview as a way to organize, explore, and reshape ideas.
  - The demonstration was done on a tablet letting people see and touch multiple pieces of text laid out spatially (rather than one line of chat).
  - Participants could explore ideas without committing to a single edit as they could jump around, trying things out and undoing easily. This is something linear chat-based AI writing tools don't really support.
- **Impacts on the writing process**: tools felt playful and creative, inspiring ideas for collaboration.
  - They described the experience as more like creative experimentation than task completion and that the material-based interaction could be expanded to collaborative writing where multiple users could manipulate a shared canvas.
  - However, participants also noted that some aspects of the writing process felt missing compared to chat interfaces. A participant said the tools lack explainability of its reasoning compared to using chat based LLMs where they could check certain sources more easily.

### Discussion

Overall, I think this paper introduces a novel idea with the prototypes seeming quite useful. It could lower the barrier for non-expert writers or people uncomfortable with prompt-writing.

I feel that prompting an LLM when organizing thoughts for a project feels very sterile and honestly takes the enjoyment out of writing. This could potentially support creativity in writing in ways that "typing a command into an LLM" can't.

However, as this is a small, explorative study, the findings don't necessarily prove that this approach produces better writing or be preferred at scale. One thing the researchers noted was that interactions should strike an intentional **balance between literal and abstract design choices.**

They noted that the same gesture was interpreted differently across participants. I can imagine using a tool like this might lead to frustration as the outputs created by the different gestures seem quite ambiguous.

Reading this paper was refreshing compared to the LLM papers I usually read. It's interesting to see research taken in a different direction from papers that introduce larger/more efficient models or evaluation/benchmark papers.

## Paper 3

> [^3] SusBench: An Online Benchmark for Evaluating Dark Pattern Susceptibility of Computer-Use Agents

I am legit too brainrotted, why did I think of amogus. Maybe the authors of the paper did this on purpose. What a sus paper.

### Subpoint

### Subpoint

### Subpoint

### Subpoint

## Paper 4

> [^4] HiFiGaze: Improving Eye Tracking Accuracy Using Screen Content Knowledge

---

### Subpoint

### Subpoint

### Subpoint

## Paper 5

> [^5] Beyond Screenshots: Evaluating VLMs’ Understanding of UI Animations

---

### Subpoint

### Subpoint

### Subpoint

### Subpoint

### Subpoint

## Works Cited

[^1]: Jiwan Kim, Chi-Jung Lee, et. al. 2026. WatchHand: Enabling Continuous Hand Pose Tracking On Off-the-Shelf Smartwatches. In _Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI’26), April 13–17, 2026, Barcelona, Spain_. ACM, New York, NY, USA, 21 pages. [https://doi.org/10.1145/3772318.3790932](https://arxiv.org/pdf/2602.21610)

[^2]: Jocelyn Shen, Nicolai Marquardt, Hugo Romat, Ken Hinckley, Nathalie Riche,and Fanny Chevalier. 2026. Texterial: A Text-as-Material Interaction Paradigm for LLM-Mediated Writing . In _Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI ’26), April 13–17, 2026, Barcelona, Spain_. ACM, New York, NY, USA, 33 pages. [https://doi.org/10.1145/3772318.3790330](https://arxiv.org/pdf/2603.00452)

[^3]:
    Longjie Guo, Chenjie Yuan, Mingyuan Zhong, Robert Wolfe, Ruican Zhong,
    Yue Xu, Bingbing Wen, Hua Shen, Lucy Lu Wang, and Alexis Hiniker. 2026.
    SusBench: An Online Benchmark for Evaluating Dark Pattern Susceptibility
    of Computer-Use Agents. In _31st International Conference on Intelligent User
    Interfaces (IUI ’26), March 23–26, 2026, Paphos, Cyprus_. ACM, New York, NY,
    USA, 21 pages. [https://doi.org/10.1145/3742413.3789111](https://dl.acm.org/doi/epdf/10.1145/3742413.3789111)

[^4]:
    Taejun Kim, Vimal Mollyn, Riku Arakawa, and Chris Harrison. 2026. Hi-
    FiGaze: Improving Eye Tracking Accuracy Using Screen Content Knowledge.
    In _Proceedings of the 2026 CHI Conference on Human Factors in Computing
    Systems (CHI ’26), April 13–17, 2026, Barcelona, Spain_. ACM, New York, NY,
    USA, 12 pages. [https://doi.org/10.1145/3772318.3791339](https://arxiv.org/pdf/2603.19588)

[^5]:
    Chen Liang, Xirui Jiang, Naihao Deng, Eytan Adar, and Anhong Guo. 2026. Beyond Screenshots: Evaluating VLMs’ Understanding of UI Animations. In _Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics, July 2–7, 2026, San Diego, California, United States_. 21 pages. [  
    https://doi.org/10.48550/arXiv.2604.26148](https://arxiv.org/pdf/2604.26148)
