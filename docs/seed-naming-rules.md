# 谈谈电影、剧集、番剧、AV及音乐的命名规则
>一份详尽的指南，旨在帮助您理解和规范各类影音资源的命名。
> 
>最后更新于：2025-08-23

---
## 🧭 总目录 (Table of Contents)
> 点击下方分类标题，可展开/折<叠该分类下的详细章节目录。

<details>
<summary><strong>🎬 电影与电视剧 (Movies & TV Shows)</strong></summary>

* [⭐ **新手快速入门 (影视)**](#movies-tv-starter)
* [💎 **硬核深度解析 (影视)**](#movies-tv-deep-dive)
  * [数字收藏理念与最佳实践](#movies-tv-philosophy)
  * [常见误区与争议话题](#movies-tv-myths)
  * [基础信息与版本](#movies-tv-basics)
  * [片源来源](#movies-tv-sources)
  * [分辨率](#movies-tv-resolution)
  * [视频编码](#movies-tv-video-codec)
  * [视频色深](#movies-tv-bit-depth)
  * [色彩动态范围](#movies-tv-hdr)
  * [音频格式](#movies-tv-audio)
  * [封装容器/后缀](#movies-tv-container)
  * [发布与整理](#movies-tv-release)
  * [常用工具与资源站点 (影视)](#movies-tv-tools)
  * [实战环节 (影视)](#movies-tv-examples)
</details>

<details>
<summary><strong>🎵 音乐 (Audio)</strong></summary>

* [⭐ **新手快速入门 (音乐)**](#music-starter)
* [💎 **硬核深度解析 (音乐)**](#music-deep-dive)
  * [音乐命名核心逻辑](#music-logic)
  * [文件/文件夹的组织与命名](#music-naming)
  * [音频格式 (深度解析)](#music-formats)
  * [来源与抓取 (深度解析)](#music-sources)
  * [音乐圈术语/黑话小词典](#music-glossary)
  * [常用工具与资源站点 (音乐)](#music-tools)
  * [实战环节 (音乐)](#music-examples)
</details>

<details>
<summary><strong>🌸 番剧 (Anime)</strong></summary>

* [⭐ **新手快速入门 (番剧)**](#anime-starter)
* [💎 **硬核深度解析 (番剧)**](#anime-deep-dive)
  * [番剧命名结构与发布流程](#anime-structure)
  * [如何选择合适的番剧版本？](#anime-versions)
  * [番剧的分类与发行形式](#anime-types)
  * [发布组/字幕组详解](#anime-groups)
  * [季/集/版本信息](#anime-season-episode)
  * [源与画质的深度解析](#anime-source-quality)
  * [音频与字幕的深度解析](#anime-audio-subs)
  * [番剧画质修复与技术讲解](#anime-restoration)
  * [CRC32 校验码](#anime-crc32)
  * [番剧圈术语/黑话小词典](#anime-glossary)
  * [常用工具与资源站点 (番剧)](#anime-tools)
  * [实战环节 (番剧)](#anime-examples)
</details>

<details>
<summary><strong>🔞 AV (Adult Video)</strong></summary>

* [⭐ **新手快速入门 (AV)**](#av-starter)
* [💎 **硬核深度解析 (AV)**](#av-deep-dive)
  * [AV命名核心逻辑](#av-logic)
  * [番号 (ID Code) 详解](#av-id-code)
  * [厂商/品牌](#av-studio)
  * [审查状态与来源](#av-censorship)
  * [字幕与附加信息](#av-subtitles)
  * [文件名的社区化与内容标签](#av-community-tags)
  * [AV圈术语/黑话小词典](#av-glossary)
  * [常用工具与资源站点 (AV)](#av-tools)
  * [实战环节 (AV)](#av-examples)
</details>

* [🙏 **鸣谢与知识来源**](#acknowledgements)
* [📚 **参考链接**](#references)
* [✨ **结语**](#conclusion)

---
---

## 🎬 电影与电视剧
<a id="movies-tv-starter"></a>
### ⭐ 电影和电视剧-新手入门
> 为初次接触影视收藏的用户准备的“傻瓜式”指南，助您轻松选择。

#### 我应该下载什么版本？ (一句话建议)
* **追求平衡的日常观影者 (大多数人的最佳选择)**:
  > 👉 选 **`1080p`** + **`BDRip` 或 `WEB-DL`** + **`x265 10bit`**。这个组合在画质、体积和兼容性上做到了完美的平衡，是媒体库的填充主力。
* **追求极致的收藏家/发烧友**:
  > 👉 选 **`2160p`** + **`Remux`** + **`HEVC 10bit HDR/DV`**。硬盘再大也不够用，但你能拥有最顶级的影音体验。
* **如果我的存储空间/网络带宽有限**:
  > 👉 选 **`1080p` 或 `720p`** + **`BDRip`/`WEB-DL`** + **`x265`** 编码。x265的高压缩率能让你在较小的体积下获得依然出色的画质。

#### 文件名里最重要的几个标签是什么意思？
| 标签 | 分类 | 含义 |
| :--- | :--- | :--- |
| `2160p`/`4K` | **分辨率** | 超高清，画面最清晰，适合4K电视。 |
| `1080p` | **分辨率** | 全高清，应用最广泛，适合绝大多数屏幕。 |
| `720p` | **分辨率** | 高清，清晰度的入门标准。 |
| `Remux` | **片源** | **无损**，原汁原味，画质最好，体积最大。 |
| `WEB-DL` | **片源** | **高质量**，来自流媒体官方，画质极佳。 |
| `BDRip` | **片源** | **高质量**，由蓝光压制，性价比最高。 |
| `x265`/`HEVC`| **编码** | 新一代技术，**体积更小**。 |
| `x264`/`AVC` | **编码** | 上一代技术，兼容性好。 |
| `HDR`/`DV` | **色彩** | 更好的色彩和亮度，**需要你的电视支持**。 |
| `S01E01` | **剧集** | 第一季(S01)第一集(E01)的意思。 |

#### 我需要多大的硬盘？ (大致体积参考)
* **一部1080p电影**: `2GB` ~ `15GB`
* **一部4K (2160p) 电影**: `10GB` ~ `40GB`
* **一部1080p Remux电影**: `20GB` ~ `50GB`
* **一部4K Remux电影**: `40GB` ~ `100GB+`

---
<a id="movies-tv-deep-dive"></a>
### 💎 电影与电视剧-硬核深度解析
> 为追求极致的收藏家和技术爱好者准备的详尽解释、技术细节和圈内惯例。

<a id="movies-tv-philosophy"></a>
#### 数字收藏理念与最佳实践
##### 1. 收藏的两种哲学：原教旨主义 vs 实用主义
* **原教旨主义 (The Purist)**
  > **核心目标**: 追求对原始物理媒介（如蓝光光盘）的**1:1比特级完美**数字复制。
  > **首选版本**: `Full Disc (BDMV/ISO)` 或 `Remux`。
  > **关注点**: 完整保留原盘的所有内容，包括菜单、多语言音轨/字幕、花絮以及未经任何修改的原始视频流。对任何形式的“有损”二次编码都持排斥态度。这是数字档案管理员和终极发烧友的道路。

* **实用主义 (The Pragmatist)**
  > **核心目标**: 在**可接受的存储成本**下，获得**最佳的综合观影体验**和**最高的设备兼容性**。
  > **首选版本**: 高码率的 `BDRip` 或 `WEB-DL`。
  > **关注点**: 极佳的视觉质量、高效的存储效率、在各类设备上直接播放的便利性。甚至欣赏顶级压制组对有瑕疵的原盘进行的画质修复（如降噪、去色带），认为修复后的`BDRip`可能比原始`Remux`观感更好。这是绝大多数媒体服务器玩家的选择。

##### 2. 为什么体积不是衡量质量的唯一标准？
* **编码效率**: 一个高效率`H.265`编码的10GB文件，其画质可能等同甚至优于一个低效率`H.264`编码的15GB文件。
* **源盘质量与修复**: 如果蓝光原盘本身就带有大量噪点或色带，一个未经处理的50GB `Remux`会忠实地保留这些瑕疵。而一个20GB的、由顶级压制组进行过精细降噪和去色带处理的`BDRip`，在观感上可能会“更干净”、“更舒服”。

##### 3. 构建你的媒体库：长期维护策略
* **始于实用**: 对新手而言，从高质量的`BDRip`/`WEB-DL`开始构建媒体库是最明智的选择。
* **精选主义**: 随着收藏的增长，为你最钟爱的、值得反复品味的“神作”们升级到`Remux`版本。
* **备份策略**: 珍贵的数字收藏也需要备份！无论是使用RAID阵列、NAS还是冷存储，为你的心血结晶制定一个可靠的备份计划至关重要。

<a id="movies-tv-myths"></a>
#### 常见误区与争议话题
##### 🤔 Remux画质一定比BDRip好吗？
* **数据层面**: **是的**。Remux是无损提取，保留了100%的原始数据。
* **视觉层面**: **不一定**。如果原盘有瑕疵（如噪点、色带），一个经过顶级压制组精心**修复**的BDRip，在人眼观感上可能更讨喜。但一个糟糕的BDRip（码率过低或参数不当）则会远逊于Remux。

##### 🤔 WEB-DL和BDRip哪个更好？
* **一句话**: **看情况，比码率。**
* **新剧/独占内容**: 对于刚播出的剧集或流媒体独占内容（如Netflix电影），`WEB-DL`是当下能获得的最高质量版本。
* **已发售蓝光**: 对于已发售蓝光的影视剧，通常蓝光原盘的视频码率会高于流媒体版本，因此其`BDRip`的画质上限也更高。
* **特例**: 偶尔流媒体平台会获得独家的`Dolby Vision` 4K母版，而实体蓝光只发行普通HDR10版，此时`WEB-DL`会是更好的选择。

<a id="movies-tv-basics"></a>
#### 基础信息与版本
* **电影基本信息**: `Interstellar.2014` 包含电影名和上映年份，是自动化工具识别的基础。
* **剧集/季信息**: `S01E01` (第一季第一集), `S01` (第一季打包), `S01E01-E10` (第一季1-10集)。
* **版本类型 (Cuts)**:
    * **`Theatrical.Cut`**: 剧场版（影院公映版本）。
    * **`Director.Cut/DC`**: 导演剪辑版。导演本人最满意的版本，可能增删或重排了场景。
    * **`Extended`**: 加长版。通常比剧场版长，加入了更多场景，但不一定是导演本人的意愿。
    * **`UNRATE`**: 未删节版。恢复了为通过审查（如MPAA评级）而剪掉的暴力或裸露镜头。
    * **`Anniversary.Edition`**: 周年纪念版。
    * **`REMASTERED`**: 重制版，指对老电影进行画质修复和重新灌录。
* **画面比例类**:
    * **`IMAX`**: 巨幕版，特定场景画面比例更高(1.90:1或1.43:1)，能显示更多内容。
    * **`Open.Matte`**: 满屏版。指去除了用于影院宽屏放映而添加的上下遮幅，展示了原始胶片更多的画面内容。
    * **`WS`**: Wide Screen，宽屏幕版本的影片。
    * **`FS`**: Full Screen，4:3 全屏幕版本的影片。

<a id="movies-tv-sources"></a>
#### 片源来源
##### ⭐ 第一梯队：原盘与无损 (Top Tier)
* **UHD Blu-ray / Blu-ray / BD / BDMV / ISO**: **画质源头，质量最高**。指未经任何修改的蓝光或4K UHD蓝光原盘完整内容或镜像文件。体积最大，包含所有花絮、菜单和多语言音轨。蓝光碟的常见容量有`BD25`(25GB), `BD50`(50GB), `BD66`(66GB), `BD100`(100GB)，容量越大通常意味着视频码率越高。
* **REMUX**: **无损提取，视听体验等同原盘**。使用`MakeMKV`等工具，从蓝光原盘中无损地提取出主要的视频流和音频流，去除菜单、花絮和其他不需要的音轨字幕，然后封装到单个 `.mkv` 文件中。无任何画质和音质损失，是收藏党的首选。

##### 🥈 第二梯队：高质量数字版 (High-Quality Digital)
* **WEB-DL**: **官方数字源，画质极佳**。全称为 web-download，通过技术手段捕获并解密来自官方在线流媒体平台（如 Netflix, Amazon, iTunes）的原始音视频流，未经二次压缩。画质通常非常接近甚至在某些情况下优于BDRip，是目前越来越流行的顶级片源。
* **BDRip / BRRip**: **有损压制，性价比之选**。对蓝光原盘或Remux进行二次编码压制，采用 `H.264` 甚至 `H.265` 编码以大幅减小文件体积。只要压制参数优秀、码率足够（如1080p电影体积>8GB），画质损失人眼很难察觉，是最常见的资源类型。
* **Mastered in 4K**: **伪4K蓝光**。这是索尼在4K UHD蓝光普及前推出的一种特殊1080p蓝光。它使用4K母版进行制作，理论上在索尼自家的4K电视上播放会有更好的效果，但其本质仍然是1080p分辨率。

##### 🥉 第三梯队：广播与录制 (Broadcast & Recording)
* **HDTV / HDTVrip / HDrip**: **电视录制，质量浮动**。常见于老电影。是数字采集 HD 电视得来的。在那个年代已经是最好的了。因为是电视，有可能会有台标。`HDTVrip` / `HDrip` 类似 `BDRip`，来源还是 HD 电视的采集，但是重新编码了。
* **WEBRip**: **录屏所得，质量有损**。从官方发行的网络版屏幕录像或者重新编码转制得来，质量可能相对于`WEB-DL`稍差。
* **HD-DVD / HD-DVDRip**: **历史的眼泪**。已被蓝光淘汰的历史格式，目前流传的资源多为2009年以前发行，质量介于DVD和蓝光之间。
* **DVDRip**: **DVD转制**。从最终版的DVD转制而来，分辨率较低（`480p`或`576p`）。

##### 🧼 第四梯队：预览与早期版 (Pre-Retail & Early Release)
* **DVDScr / SCR**: **预览版**。常见于颁奖季送审样片，画质接近零售DVD，但可能带有“仅供评审使用”等水印或黑白片段。
* **R5**: **特定区域早期版**。5区R5一般大都是俄罗斯5区版，视频质量接近`DVDScr`，但音轨可能是用枪版`TS`的英语原声音频合成的。

##### 📉 第五梯队：盗录版 (Cinema Rips)
* **TC (Telecine)**: **胶片版**。使用电视电影机从电影胶片直接数字拷贝，画质尚可但可能偏暗，音质通常较差。
* **TS (Telesync)**: **盗录版**。在影院的放映室使用专业摄像机录制，画面比`CAM`稳定，但音源通常是从座椅残障辅助接口获取。
* **CAM (Camera)**: **盗录版（标准“枪版”）**。用摄像机在影院直接盗录，画面晃动，声音嘈杂，质量最差。

<a id="movies-tv-resolution"></a>
#### 分辨率
* **核心概念： "p" 与 "i" 的区别**
> * **p (Progressive Scan - 逐行扫描)**：现代显示技术的主流。每一帧图像都是完整地被扫描和显示的。我们看到的`1080p`、`720p`都属于这种，画面稳定无闪烁，观感更好。**绝大多数的电影和剧集资源都是 "p" 格式。**
> * **i (Interlaced Scan - 隔行扫描)**：一种较老的技术，主要用于传统电视广播。它将一帧图像分成奇数行和偶数行两个场，交错显示。这样能节省带宽，但高速运动的画面可能会产生梳状条纹。常见的标识是`1080i`。
> **简单来说：在同等数字下，`p` 的画质体验优于 `i`。**
* **分辨率层级表**
| 级别 | 常见标识 | 俗称/别名 | 像素尺寸 (宽x高) |
| :--- | :--- | :--- | :--- |
| **超高清 UHD** | `8K` / `4320p` | 8K UHD | 7680x4320 |
| **超高清 UHD** | `4K` / `2160p` / `UHD`| 4K UHD | 3840x2160 |
| **全高清 FHD** | `1080p` | FullHD | 1920x1080 |
| **高清 HD** | `720p` | HD | 1280x720 |
| **标清 SD** | `576p` / `480p` | SD | 720x576 / 720x480 |

<a id="movies-tv-video-codec"></a>
#### 视频编码
* **AV1**: **未来的标准，开放且免版税**。
* **H.265 / HEVC**: **现在的主流，4K时代的核心**。
* **H.264 / AVC**: **曾经的王者，兼容性之王**。
* **ProRes**: **专业剪辑编码**。
* **VP9**: **Google主导的开放格式**。
* **MPEG-4 (XviD/DivX)**: **H.264前的网络霸主**。
* **VC-1**: **微软主导的蓝光编码**。
* **MPEG-2**: **DVD时代标准**。

<a id="movies-tv-bit-depth"></a>
#### 视频色深
* **`10bit`**: 能组合出 10.7 亿色，色彩过渡更平滑，能有效减少色阶断层。
* **`8bit`**: 最常见的标准，能表示出 1670 万种颜色。

<a id="movies-tv-hdr"></a>
#### 色彩动态范围
* **Dolby Vision / DV / DoVi**: 采用“动态元数据”，效果惊艳。
* **IMAX Enhanced**: 认证项目，包含更高画幅和DTS:X音效。
* **HDR10+ / HDR10PLUS**: 添加了“动态元数据”的HDR10升级版。
* **HDR / HDR10**: 应用最广泛的基础HDR标准，采用“静态元数据”。
* **HLG**: 主要用于广播电视的HDR标准。
* **SDR**: 标准动态范围，所有非HDR视频的统称。

<a id="movies-tv-audio"></a>
#### 音频格式
* **第一梯队：无损沉浸式音频**: `Dolby Atmos`, `DTS:X`
* **第二梯队：无损多声道音频**: `DTS-HD MA`, `Dolby TrueHD`, `PCM`
* **第三梯队：高清有损多声道音频**: `DTS-HD HR`, `DDP/EAC3`, `DTS`, `DD/AC3`
* **第四梯队：通用有损音频**: `Opus`, `AAC`, `MP3`

<a id="movies-tv-container"></a>
#### 封装容器/后缀
* `mkv`: 功能最强大的主流容器。
* `mp4`: 兼容性最好的主流容器。
* `ts` / `m2ts`: 蓝光原盘或电视录制的原始数据流。

<a id="movies-tv-release"></a>
#### 发布与整理
* **发布组信息**: 文件名末尾 `-` 后的部分，如 `-WiKi`。`NOGRP`表示无特定发布组。
* **压制参数与NFO文件解析**: `.nfo`文件是判断压制质量的技术说明书，包含`CRF`, `Preset`等关键参数。
* **文件/文件夹的组织与命名**: 为便于Plex/Emby等工具识别，电影文件夹通常命名为 `电影名 (年份)`，电视剧为 `剧集名 (年份)/Season XX/`。

<a id="movies-tv-tools"></a>
#### 常用工具与资源站点 (影视)
* **自动化管理**: `Radarr` (电影), `Sonarr` (电视剧), `Bazarr` (字幕)。
* **文件整理**: `FileBot`, `TinyMediaManager (tmm)`。
* **技术分析**: `MediaInfo`。
* **信息数据库**: `IMDb`, `TMDb`, `TheTVDB`。
* **字幕站点**: `SubHD`, `OpenSubtitles`。

<a id="movies-tv-examples"></a>
#### 实战环节 (影视)
`The.Lord.of.the.Rings.The.Fellowship.of.the.Ring.2001.Extended.Cut.2160p.UHD.BluRay.x265.10bit.HDR.DTS-HD.MA.7.1-FraMeSToR`
* **电影**: `The.Lord.of.the.Rings...` (指环王1)
* **版本**: `Extended.Cut`
* **分辨率/来源**: `2160p.UHD.BluRay`
* **技术规格**: `x265.10bit.HDR`
* **音频**: `DTS-HD.MA.7.1`
* **发布组**: `FraMeSToR`

## 🎵 音乐
<a id="music-starter"></a>
### ⭐ 音乐-新手入门
#### 无损和有损是什么意思？我该选哪个？
> **无损 (Lossless)**: 就像是照片的“原图”，保留了CD的全部声音信息，音质最好。**`FLAC`** 是最常见的无损格式。
> **有损 (Lossy)**: 就像是“压缩过的图片”，为了减小文件体积，丢掉了一些人耳不敏感的声音细节。
>
> **一句话建议**: **硬盘足够就选`FLAC`**，它是收藏的黄金标准。如果是在手机上听或空间有限，**`MP3 (320kbps)`** 的音质对大多数人来说也完全足够了。

#### CD音质和Hi-Res是什么？
> **CD音质 (16bit/44.1kHz)**: 我们通常听的CD唱片的音质标准，是高质量音乐的基准线。
> **Hi-Res (高解析度音频)**: 规格高于CD音质（如`24bit/96kHz`），理论上能提供更丰富的细节和动态。**通常需要搭配好的耳机或音响才能听出区别**。

---
<a id="music-deep-dive"></a>
### 💎 音乐-硬核深度解析

<a id="music-logic"></a>
#### 音乐命名核心逻辑
**文件夹**: `艺术家 (Artist) - [年份] 专辑名 (Album) [版本信息] [格式与规格]`
**文件名**: `音轨号 (Track #) - 歌曲名 (Title).ext`

<a id="music-naming"></a>
#### 1. 文件/文件夹的组织与命名
* **标准专辑**: `Artist - [YYYY] Album [Edition] [Catalog#] [Format-BitDepth-SampleRate]`
* **合辑**: `Various Artists - [YYYY] Album Title ...`
* **古典音乐**: `Composer - [YYYY] Work (Conductor, Orchestra, Soloist) [Format]`

<a id="music-formats"></a>
#### 2. 音频格式 (深度解析)
* **无损格式**: `FLAC`, `ALAC`, `WAV`, `DSD`, `MQA`
* **有损格式**: `Opus`, `AAC`, `MP3`

<a id="music-sources"></a>
#### 3. 来源与抓取 (深度解析)
* **来源**: `CD`, `SACD`, `WEB`, `黑胶转录`
* **“完美抓取” (The Perfect Rip)**: `EAC`/`XLD`软件, `.log`文件的作用, `.cue`文件的意义, `AccurateRip`数据库验证。

<a id="music-glossary"></a>
#### 4. 音乐圈术语/黑话小词典
* **Hi-Res Audio**: 高于CD音质的音频。
* **Bit-perfect**: 数据在播放中未经任何修改。
* **频谱图 (Spectrogram)**: 用于鉴别“假无损”的图像。
* **Transcode (转码)**: 有损转无损是“原罪”。

<a id="music-tools"></a>
#### 常用工具与资源站点 (音乐)
* **自动化管理**: `Lidarr`。
* **元数据编辑**: `MusicBrainz Picard`, `Mp3tag`。
* **CD抓轨**: `EAC` (Windows), `XLD` (Mac)。
* **频谱分析**: `Spek`, `Audacity`。
* **信息数据库**: `Discogs`, `MusicBrainz`, `Rate Your Music (RYM)`。

<a id="music-examples"></a>
#### 实战环节 (音乐)
`Eagles - [1976] Hotel California (1992 Japanese Press) [FLAC-24-192 Vinyl Rip]`
* **艺术家**: `Eagles`
* **年份/专辑**: `[1976] Hotel California`
* **版本**: `(1992 Japanese Press)` (日版黑胶)
* **格式/规格/来源**: `[FLAC-24-192 Vinyl Rip]` (24bit/192kHz高解析度FLAC, 来源是黑胶转录)

---
## 🌸 番剧 (Anime)
<a id="anime-starter"></a>
### ⭐ 番剧-anime--新手入门
#### 什么是字幕组？我该信赖谁？
> 番剧的灵魂在于翻译，而**字幕组**就是进行翻译和制作的爱好者团队。文件名最前面的`[字幕组名称]`是判断质量的第一步。选择一个信誉良好的字幕组（如 `SweetSub`, `LoliHouse`, `VCB-Studio`等）能极大地提升你的观看体验。

#### 什么是生肉和熟肉？
> * **生肉 (Raw)**: 指没有任何字幕的**原始片源**。
> * **熟肉 (Cooked)**: 指由字幕组翻译并**添加了字幕**的成品。

#### 追新番和补旧番有什么区别？
> * **追新番**: 通常下载 **`WEB-DL`** 版本，这是各字幕组最快发布“熟肉”的来源。
> * **补旧番/收藏**: 优先选择 **`BDRip`** 版本。这是由蓝光原盘压制而来，通常画质更好，且经过了字幕组的精校修正，是最终的收藏版。

---
<a id="anime-deep-dive"></a>
### 💎 番剧-anime-硬核深度解析

<a id="anime-structure"></a>
#### 番剧命名结构与发布流程
**标准结构**: `[字幕组/发布组] 番剧标题 (罗马音/英文) [季/集数/版本] [技术规格] [CRC32校验码]`

<a id="anime-versions"></a>
#### 如何选择合适的番剧版本？
* **追新番**: `WEB-DL Raw` + 外挂字幕，或下载信誉良好的字幕组熟肉。
* **补番收藏**: 等待蓝光发售后，下载顶级压制组的`BDRip`。

<a id="anime-types"></a>
#### 番剧的分类与发行形式
* **TV番剧**: 电视台播出，有审查。
* **OVA/OAD**: 直接发售光盘，质量高，无修正。
* **剧场版**: 电影院上映，顶级制作。
* **WEB番剧/ONA**: 网络平台首播。
* **SP/特别篇**: TV正片外的短篇。
* **里番 vs 表番**: 成人动画 vs 常规动画。

<a id="anime-groups"></a>
#### 发布组/字幕组详解
* **生肉源提供方**: `[Lilith-Raws]`, `[Ohys-Raws]`
* **高质量压制组**: `[VCB-Studio]`, `[philosophy-raws]`
* **字幕组**: `[SweetSub]`, `[LoliHouse]`

<a id="anime-season-episode"></a>
#### 季/集/版本信息
* **单集**: `[01]`
* **多季番**: `S02E01`
* **修正版**: `[01v2]`
* **特别篇**: `[SP]`, `[OVA]`
* **剧场版**: `[Movie]`
* **打包**: `[Batch]`
* **特典**: `[NCOP]`/`[NCED]`

<a id="anime-source-quality"></a>
#### 源与画质的深度解析
* **播放平台**: `AT-X`(无圣光), `Baha`(繁中高质量), `B-Global`(简中), `CR`(英文)等。
* **画质修复**: `超分`, `去色带`, `降噪`等是顶级压制组的核心技术。
* **原生分辨率**: 很多新番并非原生1080p。

<a id="anime-audio-subs"></a>
#### 音频与字幕的深度解析
* **音频**: `FLAC`+`AAC`双音轨是常见配置。
* **字幕**: `ASS`格式因其强大的特效功能而成为绝对主流。

<a id="anime-crc32"></a>
#### CRC32 校验码
文件名末尾 `[A1B2C3D4]` 用于校验文件完整性。

<a id="anime-glossary"></a>
#### 番剧圈术语/黑话小词典
* **无圣光**: 去除电视台审查遮挡物的版本。
* **Hi10p**: H.264编码的10bit视频。
* **VFR**: 可变帧率，考验压制组技术。

<a id="anime-tools"></a>
#### 常用工具与资源站点 (番剧)
* **字幕制作**: `Aegisub`。
* **文件处理**: `MKVToolNix`。
* **信息数据库**: `AniDB`, `MyAnimeList (MAL)`, `Bangumi (番组计划)`。

<a id="anime-examples"></a>
#### 实战环节 (番剧)
`[VCB-Studio] K-ON! S1 [01-14+SP][Ma10p_1080p][x265_flac_aac_ac3_commentary].mkv`
* **压制组**: `[VCB-Studio]`
* **标题/季**: `K-ON! S1`
* **集数**: `[01-14+SP]` (正片+特别篇)
* **技术规格**: `[Ma10p_1080p][x265_flac_aac_ac3_commentary]` (1080p, x265, 3条音轨)

---
## 🔞 AV (Adult Video)
<a id="av-starter"></a>
### ⭐ AV--新手入门
#### 文件名里最重要的部分是什么？
> **番号！番号！还是番号！**
>
> `ABCD-123` 这种由字母和数字组成的**番号 (ID Code)** 是AV作品的唯一ID。

#### 怎么知道有没有字幕？
> 看文件名末尾。如果带有 **`_C`** 或 **`-CHS`** 的后缀，就表示**有中文字幕**。

#### 有码和无码是什么意思？
> * **有码 (Censored)**: 文件名带 **`-C`**，指在日本合法发行的、带有马赛克的正式版。
> * **无码 (Uncensored)**: 文件名带 **`-U`**，指无马赛克版本。

---
<a id="av-deep-dive"></a>
### 💎 AV-adult-video-硬核深度解析

<a id="av-logic"></a>
#### AV命名核心逻辑
* **极简结构**: `番号-C.mp4`
* **标准结构**: `[厂商] 番号 演员名 [附加标签]_CHS.mkv`

<a id="av-id-code"></a>
#### 番号 (ID Code) 详解
* **结构**: `系列字母`+`发行序号`。
* **变体**: `R`(租赁版), `h_`(线上版)。

<a id="av-studio"></a>
#### 厂商/品牌
* **S1**: `SSIS`, `OFJE`
* **IDEA POCKET**: `IPX`, `IPZ`
* **MOODYZ**: `MIDE`, `MIAA`
* **SOD**: `SDDE`, `STAR`
* **FALENO**: `FSDSS`

<a id="av-censorship"></a>
#### 审查状态与来源
* `-C`: **Censored (有码)**
* `-U`: **Uncensored (无码)**
* `-F`: **Leaked (泄露)**

<a id="av-subtitles"></a>
#### 字幕与附加信息
* **字幕**: `_C`, `-CHS` 等后缀表示内嵌中文字幕。
* **来源**: `DL`表示来自线上下载平台。

<a id="av-community-tags"></a>
#### 文件名的社区化与内容标签
为便于工具刮削，文件名中常加入演员名和`Cosplay`, `POV`等内容标签。

<a id="av-glossary"></a>
#### AV圈术语/黑话小词典
* **品番**: 即“番号”。
* **無修正**: 即“无码”。
* **素人**: 业余演员。
* **企画**: 主题式作品。
* **単体**: 单一主演作品。
* **FC2**: 独立/素人作品平台，番号为`FC2-PPV-xxxxxx`。

<a id="av-tools"></a>
#### 常用工具与资源站点 (AV)
* **信息数据库/索引站**: `JavBus`, `JavLibrary`。
* **文件管理/刮削器**: `JavBus Manager`。

<a id="av-examples"></a>
#### 实战环节 (AV)
`[FALENO] FSDSS-001 - Anri Sonozaki [C-1080p]_CHS.mkv`
* **厂商**: `[FALENO]`
* **番号**: `FSDSS-001`
* **演员**: `Anri Sonozaki`
* **标签**: `[C-1080p]` (有码, 1080p)
* **字幕**: `_CHS` (带中文字幕)

---
<a id="acknowledgements"></a>
### 🙏 鸣谢与知识来源 (Acknowledgements & Knowledge Sources)
本指南的撰写，除了作者本人的经验积累，还得益于全球数字媒体爱好者社区多年来沉淀的集体智慧。特此鸣谢以下平台、组织及社区，它们是本指南各项深度知识的主要来源：

#### 基础技术标准与维基
* **维基百科 (Wikipedia)**: 所有公开技术（如各类编码、封装格式）的基础定义和历史沿革的主要参考。
* **开发者与标准组织**:
    * **Dolby Developer, DTS, IMAX**: 杜比、DTS、IMAX官方网站，提供了关于其各自技术（如Atmos, DTS:X, Dolby Vision, IMAX Enhanced）的最权威解释。
    * **x264, x265, FFmpeg 项目文档**: 开源编码器和处理工具的官方文档，是理解视频压制参数的根本。
    * **The Matroska Project**: MKV封装格式的官方规格文档。

#### 社区规范与深度知识
> 许多“黑话”和“最佳实践”并非来自官方，而是源于以下这些全球最硬核的爱好者社区的讨论和共识。

* **影视剧 & PT文化**:
    * **Doom9's Forum**: 全球最老牌、最硬核的数字视频技术论坛，是无数视频编码技术和压制理论的发源地。
    * **AVSForum**: 顶级的家庭影院技术论坛，关于HDR、音频格式等硬件和体验的讨论非常深入。
    * **知名PT站点的社区维基与规则**: （出于私密性考虑不便列举站名）各大顶级PT站的Wiki和规则区，是`Remux`制作标准、版本命名规范、`NFO`文件写法的“立法”源头。

* **音乐发烧友**:
    * **Hydrogenaudio Forums**: 数字音频领域的“圣地”，关于音频编解码器、无损抓轨（EAC/XLD）、盲听测试（ABX）的终极权威。
    * **What.CD (及其精神继承者)**: 已关闭的传奇音乐PT站，其制定的无损音乐抓取、记录（Log/Cue）和分享标准，至今仍是全球发烧友社区的黄金准则。
    * **Discogs, MusicBrainz**: 最全面的音乐发行元数据数据库。

* **番剧 & 字幕组**:
    * **AniDB (Anime DataBase)**: 最详尽的番剧技术元数据维基，包括原生分辨率、音轨等信息。
    * **知名字幕组/压制组的技术博客**: 如`VCB-Studio`等小组会公开发布其压制理念和技术教程，是理解番剧画质修复（去色带、超分等）的最佳参考。
    * **Animesuki, Crymore.net等论坛**: 早期和现代动漫BT分享和讨论的聚集地。

* **AV收藏**:
    * **JavBus, JavLibrary**: AV作品的“IMDb”，是番号、厂商、演员信息最主要的公共数据库。

---
<a id="references"></a>
### 📚 参考链接 (References)
1.  [谈谈电影音频视频格式及常见种子命名规则 - ptbsare.org](https://ptbsare.org/2024/07/19/谈谈电影音频视频格式及常见种子命名规则/)
2.  [Bilibili - HDR Vivid-“世界超高清视频产业联盟”推出的HDR新标准](https://www.bilibili.com/read/cv34408411/)
3.  [博客园 - [转]史上最全的各种视频格式的解释](https://www.cnblogs.com/PBDragon/p/4810982.html)
4.  [维基百科 - VP8](https://zh.wikipedia.org/wiki/VP8)
5.  [维基百科 - VP9](https://zh.wikipedia.org/wiki/VP9)
6.  [维基百科 - AV1](https://zh.wikipedia.org/wiki/AV1)
7.  [维基百科 - Opus (音频格式)](https://zh.wikipedia.org/wiki/Opus)
8.  [维基百科 - Apple ProRes](https://zh.m.wikipedia.org/wiki/Apple_ProRes)
9.  [牛X-RTE - 什么是杜比视界、HDR10+、HDR10和HLG？](https://www.nxrte.com/jishu/32742.html)
10. [GitHub - 常见音视频编码格式](https://github.com/0voice/audio_video_streaming/blob/main/article/012-常见音视频编码格式.md)
11. [Hao4K - 4K电影中音频杜比和DTS是什么意思?](https://www.hao4k.cn/thread-31731-1-1.html)
12. [搜狐 - 杜比全景声 (Dolby Atmos) 和 DTS:X 有什么区别？](https://www.sohu.com/a/638671599_120931436)
13. [知乎 - 什么是WEB-DL，WEBRip，HDTV，BDRip以及REMUX？](https://zhuanlan.zhihu.com/p/337850228)
14. [Einverne's Blog - What is 0day and what is PT](https://blog.einverne.info/post/2015/05/what-is-0day-and-what-is-pt.html)

---
<a id="conclusion"></a>
### ✨ 结语
至此，这份关于数字影音收藏的“不完全”指南也到了尾声。从最基础的`1080p`与`Remux`，到硬核的`NFO`参数与`EAC Log`，我们一同探索了由技术与热爱共同构建的奇妙世界。

规则虽繁杂，但其核心始终如一：为了以最忠实、最完美的方式，保存和体验那些曾带给我们感动与欢乐的作品。

希望这份指南能成为您数字收藏之旅上的一张可靠地图，帮助您精准地找到属于自己的宝藏。

Happy collecting!
>