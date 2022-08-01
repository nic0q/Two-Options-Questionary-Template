import { useState } from "react"

export function Questionary() {
  const [questionNumber, setQuestionNumber] = useState(0)
  const a = [
    ["https://i1.sndcdn.com/avatars-ySagyYK2awyAYHhy-Ua1tSA-t500x500.jpg","https://i1.sndcdn.com/avatars-uyVQnIjD6oWY26HK-1yqFog-t500x500.jpg"],
    ["https://img.wattpad.com/5930f711491281ae0e5ac79c49b3ce59f5e61066/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a756d5367565a6a3668643663513d3d2d3731353035363436302e313539323161643030333438326432353531373437373630313138342e6a7067", "https://i1.sndcdn.com/avatars-000620778858-erdmax-t500x500.jpg"],
    ["data:image/jpeg;base64,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","https://ih1.redbubble.net/image.2417902599.1058/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"],
    ["https://thumbs.gfycat.com/BrightAfraidAnteater-size_restricted.gif", "https://i.gifer.com/Xdt8.gif"],
    ["https://i.kym-cdn.com/photos/images/original/000/879/643/84f.gif","https://i.gifer.com/W2VX.gif"],
    ["https://c.tenor.com/2N9uq90pz2QAAAAd/cat-standup.gif", "https://thumbs.gfycat.com/QuerulousWideeyedHatchetfish-size_restricted.gif"],
  ]
  const next = (key) => {
    setQuestionNumber((anterior) => anterior + 1)
    console.log(key)
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Choose One Option</h1>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>{questionNumber}</div>
        <div className="flex items-stretch p-0">
          <button className="m-4" key="0" onClick={() => next(0)}>
            <Option key="0" n={a[questionNumber][0]}></Option>
          </button>
          <button className="m-4" onClick={() => next(1)}>
            <Option key="1" n={a[questionNumber][1]}></Option>
          </button>
        </div>
      </div>
    </>
  )
}

function Option({ n }) {
  return (
    <div className="flex items-start justify-center p-0 w-96 border-2 ">
      <div>
        <img src={n} alt="option " />
      </div>
      
    </div>
  )
}
