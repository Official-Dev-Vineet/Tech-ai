import React from 'react'
import Header from '../Ui/ui-component/Header'

const PoseEstimation = () => {
  return (
    <div>
      <Header image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FQzsp4hHXiAAY8%2Fgiphy.gif&f=1&nofb=1&ipt=4c7c5a4021c1795e538c20b1e23f6b2384bb9c36de691d23c1aa7cfadf678ac9&ipo=images' title='Human Pose Estimation and Analysis Software Development'>
      Development of efficient human pose estimation, tracking, activity recognition and analysis solutions in real-time from scratch
      </Header>
    <main className="main-content">
      <section className="get-started grid-two">
      <p>InData Labs is a computer vision company that provides best-in-class services for you to accelerate the growth of your business.<br/>
We use state-of-the-art deep learning and data science approaches to provide scalable and reliable human body pose estimation software and human movement analytics tailored specifically to your needs.<br/>

Let us leverage our senior-level expertise to develop a bespoke solution for you from scratch or advance the existing one.</p>
<iframe src="https://www.youtube.com/embed/fjT7L78-BBU" frameborder="0" title='pose-estimation' style={{margin:'2em auto'}} className="yt-video">your browser does not support </iframe>
      </section>
      
    </main>
    </div>
  )
}

export default PoseEstimation