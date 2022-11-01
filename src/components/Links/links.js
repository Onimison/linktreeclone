import React from 'react'
// import { Link } from 'react-router-dom'
import slack from '../../assets/slack.png';
// import dots from '../../assets/dots.png';
// import i4g from '../../assets/I4G.jpg';
import github from '../../assets/Icon.jpg'
// import { slack, github} from '../../assets'
const links = () => {
  return (
    <section className="flex flex-col gap-4 items-center">

      <a href="https://training.zuri.team/" target="_blank" id='btn_zuri' className="bg-gray w-full max-w-[50rem] p-4 rounded-lg text-center drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <button >Twitter Link</button>
      </a>

      <a href="http://books.zuri.team/" target="_blank" id='books' className="bg-gray w-full max-w-[50rem] p-4 rounded-lg text-center drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <button >Zuri Books</button>
      </a>
      <a href="https://books.zuri.team/" target="_blank" id='book_python' className="bg-gray w-full max-w-[50rem] p-4 rounded-lg text-center drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <button >Python Books</button>
      </a>
      <a href="https://background.zuri.team/" target="_blank" id='pitch' className="bg-gray w-full max-w-[50rem] p-4 rounded-lg text-center drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <button >Background Checks for Coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules" target="_blank" id='book_design' className="bg-gray w-full max-w-[50rem] p-4 rounded-lg text-center drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <button >Design Books</button>
      </a>

      <div className="flex justify-center gap-4 h-14 p-4">
        <a>
          <img
            src={slack}
            className="h-full"
            alt="Slack icon"
          />
        </a>
        <a href="https://github.com/Onimison/">
          <img
            src={github}
            className="h-full"
            alt="GitHub icon"
          />
        </a>
      </div>
    </section>
  )
}

export default links