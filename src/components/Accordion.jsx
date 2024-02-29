import quizData from './Data';
import { useState } from 'react';

export default function Accordion() {
  console.log(quizData);
  const [selected, setSelected] = useState(null);
  const [enableBtn, setEnableBtn] = useState(false);
  const [multip, setMultip] = useState([]);

  function handleSingle(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultip(id) {
    let cpyMultip = [...multip];
    let findIndex = cpyMultip.indexOf(id);
    if (findIndex === -1) cpyMultip.push(id);
    else cpyMultip.splice(findIndex, 1);
    setMultip(cpyMultip)
  }

  return (
    <div className="flex justify-center w-screen h-screen items-center flex-col">
      <button
        className="p-2 bg-black rounded-md text-white mb-3"
        onClick={() => setEnableBtn(!enableBtn)}
      >
        Enable Multiple Selection
      </button>
      <div>
        {quizData && quizData.length > 0 ? (
          quizData.map((singleData) => {
            return (
              <div
                key={singleData.id}
                className=" bg-black mb-3 p-3 text-white text-1xl cursor-pointer"
                style={{ width: '32rem' }}
                onClick={
                  enableBtn
                    ? () => handleMultip(singleData.id)
                    : () => handleSingle(singleData.id)
                }
              >
                <div>
                  <div className="flex justify-between">
                    {' '}
                    <h1>{singleData.question}</h1>
                    <span className="text-yellow-300">+</span>
                  </div>
                  <div className="text-yellow-300">
                    {
                        

                    multip.indexOf(singleData.id) != -1 ?(<div>{singleData.answer}</div>):
                    selected === singleData.id ? singleData.answer : null
                    }
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
  c;
}
