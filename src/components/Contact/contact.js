import React from 'react'

const contact = () => {
    return (
        <div className='py-8 px-4 container mx-auto text-[#475467] max-w-[50rem]' >
            <div className='gap-5'>

                <h2 className="text-2xl font-semibold leading-10 text-[#101828]">Contact Me</h2>

                <p className="py-2 leading-7">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>
            </div>

            <form className="py-8 flex flex-col gap-4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-[#344054] text-sm font-medium">First name</label>
                        <input
                            id="first_name"
                            placeholder="Enter your first name"
                            type="text"
                            className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
                        />
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-[#344054] text-sm font-medium">Last name</label>
                        <input
                            id="last_name"
                            placeholder="Enter your last name"
                            type="text"
                            className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[#344054] text-sm font-medium">Email</label>
                    <input
                        id="email"
                        placeholder="Bashironimison@email.com"
                        type="email"
                        className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[#344054] text-sm font-medium">Message</label>
                    <textarea
                        id="message"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        type="text"
                        rows="5"
                        className="border py-2 px-4 rounded-lg border-[#D0D5DD]"
                    />
                </div>

                <div className="flex gap-4">
                    <input type="checkbox" className="relative -top-3 md:top-0" />
                    <label>
                        You agree to providing your data to Bashir Onimisi who may contact
                        you.
                    </label>
                </div>

                <div className='bg-blue-500  text-white font-bold py-2 px-4 rounded-lg'>
                    <button
                        id="btn__submit"
                        className="px-2 bg-blue w-full text-white rounded-lg font-semibold"
                    >
                        Send message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default contact