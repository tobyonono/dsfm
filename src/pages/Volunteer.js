const Volunteer = () => {

    return (
        <div>

            <section className="relative grid grid-row-[repeat(12,_1fr)] items-center font-nitti text-sm shadow-lg rounded-lg">
                <div className="relative h-72 sm:h-96 md:h-112 lg:h-cover-image -z-10">
                    <img className="select-none object-cover bg-black/10 absolute h-full w-full left-0 top-0 right-0 bottom-0 object-center text-[transparent]"
                        src='https://dublinsouthfm.ie/wp-content/uploads/2021/09/243528509_609994370168040_756822946551899205_n-760x428.jpg' />
                </div>
                <div className="lg:-mt-24">
                    <section>
                        <div className="ml-auto mr-auto p-4 sm:p-8 bg-white max-w-5xl">
                            <div className="max-w-none text-base">
                                <h1 className="font-GTWalsheim text-5xl mb-6 font-bold underline">Volunteer</h1>
                                <div className="text-left">
                                    <p className="font-GTWalsheim  mb-6">Dublin South FM is run by the community, for the community. If you have your finger on the pulse of what is happening in South Dublin, then we want to talk to you!</p>
                                    <p className="font-GTWalsheim mb-6">We are looking for Presenters, DJ’s, Programme & News researchers, Audio, and Video editors.
                                        Candidates should be supportive of the value and connections that community radio can bring to a community. We are always looking for energetic and enthusiastic volunteers who are willing to engage with our community to enhance Dublin South FM’s broadcasting output.</p>
                                    <h4 className="font-GTWalsheim text-lg font-bold  mb-6">Desirable Skills or Interests:</h4>
                                    <ul className="uppercase gap-2 italic">
                                        <li>Research/Journalism</li>
                                        <li>Previous Presenting</li>
                                        <li>Experience</li>
                                        <li>Having an interest in talking to people and finding out more about what is going on in the community.</li>
                                        <li>DJ’s for specialist music programmes</li>
                                        <li>Sound engineering</li>
                                        <li>Video editors</li>
                                    </ul>
                                    <div className="flex my-4">
                                        
                                        <div>
                                            <p className="font-GTWalsheim text-xl">What do you think you can bring to our station? Regardless of your experience, we want to hear from you.

                                                Contact us <span className="hover:underline cursor-pointer"><a>here</a></span> with your ideas!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </section>
        </div>
    )

}

export default Volunteer;