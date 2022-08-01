import { useState } from "react"
import { Option } from "./Option"
import { EndPage } from "./EndPage"
// import questionss from "../utilities/questions.json" for use in the future
export function Questionary() {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [{ left, right }, setScore] = useState({ left: 0, right: 0 })
  const questions = [
    [
      "https://i1.sndcdn.com/avatars-ySagyYK2awyAYHhy-Ua1tSA-t500x500.jpg",
      "https://i1.sndcdn.com/avatars-uyVQnIjD6oWY26HK-1yqFog-t500x500.jpg",
    ],
    [
      "https://img.wattpad.com/5930f711491281ae0e5ac79c49b3ce59f5e61066/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a756d5367565a6a3668643663513d3d2d3731353035363436302e313539323161643030333438326432353531373437373630313138342e6a7067",
      "https://i1.sndcdn.com/avatars-000620778858-erdmax-t500x500.jpg",
    ],
    [
      "https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg",
      "https://ih1.redbubble.net/image.2417902599.1058/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
    ],
    [
      "https://thumbs.gfycat.com/BrightAfraidAnteater-size_restricted.gif",
      "https://i.gifer.com/Xdt8.gif",
    ],
    [
      "https://thumbs.gfycat.com/QuerulousWideeyedHatchetfish-size_restricted.gif",
      "https://i.gifer.com/W2VX.gif",
    ],
    [
      "https://c.tenor.com/2N9uq90pz2QAAAAd/cat-standup.gif",
      "https://i.kym-cdn.com/photos/images/original/000/879/643/84f.gif",
    ],
  ]
  const next = (key) => {
    setQuestionNumber((anterior) => anterior + 1) // actual question number
    key === 0
      ? setScore((anterior) => ({ left: anterior.left + 1, right })) // score the left image
      : setScore((anterior) => ({ left, right: anterior.right + 1 })) // score the right image
    // console.table(left, right, questionNumber) // just for testing
  }
  return (
    <>
      {questionNumber !== questions.length ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-3xl font-bold mb-12">Choose One Option</h1>
          <div>
            {questionNumber + 1} / {questions.length}
          </div>
          <div className="flex items-stretch p-0 flex-wrap justify-center">
            <button className="m-4" key="0" onClick={() => next(0)}>
              <Option key="0" n={questions[questionNumber][0]}></Option>
            </button>
            <button className="m-4" onClick={() => next(1)}>
              <Option key="1" n={questions[questionNumber][1]}></Option>
            </button>
          </div>
        </div>
      ) : (
        <EndPage left={left} right={right}></EndPage>
      )}
    </>
  )
}
