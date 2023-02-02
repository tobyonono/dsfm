import { OurStoryImages } from "../images/our-story/OurStoryImages";
const OurStory = () => {

    return (
        <>
            <h1 className="font-guyot italic text-6xl mb-4 ">Our Story</h1>
            <section className="h-full w-full p-8 bg-white text-black text-left text-lg font-calibre font-light">
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <img className="float-right h-80 m-4" src={OurStoryImages[0]} />
                    <p className="clear-left  font-light mb-4">
                        Mike Purcell, Founder of Dublin South FM, recalls the story behind building Ireland’s First Community Radio Station…
                    </p>
                    <p>
                        Dublin South FM was the first community station to go on air in Dublin in June 1995. A few things happened before that, however….
                    </p>
                    <h2 className="font-GTWalsheim text-2xl my-4 underline">IN THE BEGINNING</h2>
                    <p className="mb-4">
                        Wife, talking over a raised newspaper in 1986: “I see here there’s a group talking about setting up a local radio station in Dundrum. You’re always messing about at tape recorders – maybe you should go along and see what it’s all about…..”
                    </p>
                    <p className="mb-4">Jack Byrne addressed the meeting convened by local residents associations and fired everybody with his enthusiasm for local involvement and empowerment. A committee was set up and off we went hurtling into a future which was to be full of excitement, meetings, bureaucracy, rage, political lobbying, euphoria, disappointment, meetings, a 5-year “hold-off” by the IRTC, more meetings, false alarms, plans, community involvement, shares, fundraising, building, wiring, support, training, THE LICENCE, and finally ……….”on the air” from Dundrum.</p>
                    <p className="mb-4"> My mind is awash with memories of the sheer thrill of it all…..</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <img src={OurStoryImages[1]} className="float-right h-80 m-4" />
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">FIRST STEPS</h2>
                    <p className="mb-4">
                        “But how did you start off?” I hear you cry (or perhaps not..)
                    </p>
                    <p className="mb-4">Well the committee started with weekly meetings in the local Ballinteer Community School. A tidal wave of ideas swept over each meeting – EVERYBODY had an idea about what we should be doing. These were finally broken down into tasks, and people went off into the night, clutching their notes and bubbling with enthusiasm.</p>
                    <p className="mb-4">As word spread, more volunteers began to come on board.</p>
                    <p className="mb-4">But we needed to get to grips with the mechanics of radio, and train a corps of actual broadcasters.</p>
                    <p>I was happy to dive into this area, my own interest in sound technical stuff and ‘programming’ having been honed by years in the Irish Tape Recording Society. A subsequent stint of studio building plus ‘doing the desk’ for a monthly tape magazine for the blind for about 10 years provided further useful experience.</p>
                    <p className="mb-4">(The tape magazine ‘Sceal Beo’ is, I believe, still going strong)</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <img src={OurStoryImages[2]} className="float-right mx-4 mb-4 h-80" />
                    <p className="mb-4">Anyway, a programme group was formed and we started by interviewing each other – sitting in schoolroom desks – on a Marantz  cassette tape recorder which had been gathering dust at home. Soon we were brave enough to interview total strangers, and we began to gather the results.</p>
                    <p className="mb-4">Enter Gerry Roe*, a distinguished ex-pirate. (Read Radio Radio, by Peter Mulryan [pub.1989] – ‘the story of independent, local, community and pirate radio in Ireland’ , to get the flavour of the times; we’re in there, listed as Dundrum Community Radio).</p>
                    <p className="mb-4">Gerry had a small triangular studio – triangular because it was the actual corner of his livingroom! – and there we began editing ; linking our interviews together into programmes on tape. Next –  these tapes needed to be transmitted.</p>
                    <p className="mb-4">* (was first Phantom FM Mgr.)</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <img src={OurStoryImages[3]} className="float-right mx-4 mb-4 h-80" />
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">TRANSMITTER THINGYS</h2>
                    <p className="mb-4">We heard on the grapevine, that a transmitter and aerial might be for sale, and thus came into possession of a mysterious box, plus a gold coloured thing, looking like part of a broken bedstead. This, we were informed, was a Sherman dipole – a high class aerial. We were learning!</p>
                    <p className="mb-4">Now local historian and author Jim Nolan had three very useful things for local radio : (1) a wide knowledge of local history, and a book already published : ‘The Changing Face of Dundrum’  – an ideal source of local history programmes (2)  a huge collection of music, on tape and disc, and (3) a motorised television aerial which could be rotated from a control box beside his hi-fi.</p>
                    <p className="mb-4">I had reckoned, in my innocence, that ‘an aerial was an aerial’ – i.e. it could be used to transmit as well as receive. If we plugged our transmitter into his TV aerial – surely it could transmit our signal. We could also point it towards Rathfarnham, about two miles away, to see if we could reach their community. I remember being on my hands and knees on his dining room carpet, secretly  hoping that the transmitter would not explode, or burn out his TV aerial. There was no ‘Plan B’…</p>
                    <p className="mb-4">At last, a phone call from Rathfarnham : our tape could be heard in the New World , but not too well. There was a hill between us and Rathfarnham – we needed a booster station!  Send for Marconi…</p>
                    <p className="mb-4">We had another tiny ex-taxi transmitter – maybe this could help?</p>
                    <p className="mb-4">Tony Duggan’s house was on the brow of the offending hill, on Barton Rd. East, and he happily accepted the Sherman dipole onto his roof, and donated his garage to the cause.</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <img src={OurStoryImages[4]} className=" mx-auto mb-4" />
                    <p className="mb-4">A  small portable FM radio was tuned to receive the signal from Jim Nolan’s TV aerial, and it’s headphone output fed the tiny taxi transmitter.</p>
                    <p className="mb-4">My home hi-fi tuner was brought into the garage and the digits set to our new required frequency. The taxi transmitter was then adjusted until the programme coming from Main St. was heard on the tuner. Bingo – we were in business! Thus for a short period we  ran on two frequencies, 94.8 FM for the natives of Dundrum, and relayed on 96.7FM to the tribes of Rathfarnham.</p>
                    <p className="mb-4">Our paper-and-string communications network was up and running.</p>
                    <p className="mb-4">Our next task was to ‘automate’ the operation. Two C-90 programme tapes were loaded into an AIWA  twin-deck cassette player, set to ‘repeat’. This unit came on at 8pm and went off at midnight, using a time switch. We could now demonstrate our wares to the community.</p>
                    <p className="mb-4">Notices appeared around the area advising the locals that the New Dawn had arrived.</p>
                    <p className="mb-4">Radio had been reclaimed : it was not just for THEM ,  it was for US as well!</p>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <img src={OurStoryImages[5]} className="float-right mx-4 mb-4 h-96" />
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PREMISES, PREMISES (part 1)</h2>
                    <p className="mb-4">We talked to ‘SUCCES’ – the local job creation group, and convinced them that our aims and objectives to help the local community coincided precisely with theirs. They agreed to give us a small room off Main Street, at the back of a premises they were using. A rickety dipole was mounted on the roof (parked in a tin bucket with strategically placed concrete blocks) and Jim Nolan finally got to use his TV aerial again.</p>
                    <p className="mb-4">A ‘studio’ was assembled in the room – centre-piece being a Maplin mixer, purchased in London on a day trip.</p>
                    <p className="mb-4">The room also contained the transmitter on a high shelf (NOT a good idea AT ALL folks) and we learned the hard way that radio frequencies leak into every crevice of cheap audio gear. Mysterious ‘hums’ could be cured only by routing cables on strange and wondrous paths. Zero hum positions were discovered, and the cable nailed exactly where it lay.</p>
                    <p className="mb-4">A rough Schedule was devised, and soon a stream of volunteers began to tickle the tail of the radio dinosaur.</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">OB or not OB</h2>
                    <p className="mb-4">Somebody had borrowed a radio mike, and with great excitement we sent four young volunteers out onto main Street Dundrum– about 50 feet around the corner from our studio. Clutching a Ghetto Blaster -for programme cue –  they accosted a lady who (quite reasonably) refused to believe that these teenagers were actually live on air. Her face, when she heard the Ghetto Blaster introduce the team, and then her own voice coming from it, was a sight to be seen.</p>
                    <p className="mb-4">Baffled with technology, she departed unsteadily down the street, still scratching her head…</p>
                    <div className="flex flex-row w-full">
                        <img src={OurStoryImages[6]} className="mx-4 mb-4 h-96" />
                        <img src={OurStoryImages[7]} className="mx-4 mb-4 h-96" />
                    </div>
                    <p className="mb-4">We started looking around for community activities to get involved in.</p>
                    <p className="mb-4">The annual Dundrum Festival needed PA, and we offered to arrange and run this from a caravan. (That’s me at the right of the door)</p>
                    <p className="mb-4">Needless to say we managed to insert ‘live’ interviews and music shows in between Glamorous Granny, and Bonny Baby competitions  – just to show that ‘the radio group’ were alive and well. During one ferocious downpour – the year before a caravan had become available, we were  forced to set up our DJ/PA equipment UNDER the stage – the only dry spot for miles.</p>
                    <p className="mb-4">Another year saw us squeeze the PA gear into the back of a car from which we operated quite successfully.</p>
                    <p className="mb-4">We recorded events and bands, (even The Dublin Symphony orchestra in stereo), a local history walkabout, Dundrum Castle excavations, and lots more… and these were edited and duly appeared in our taped ‘Community Report’ programme.</p>
                    <p className="mb-4">Things were really beginning to move, or so we thought…</p>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PIRATES</h2>
                    <p className="mb-4">At this time, Dublin was saturated with pirate station, many coming on-air at weekends (when their owners were off school !). Bands of pirate brigands roamed the capital, stealing anything that could assist transmission. Stories abounded of transmitters locked in underground bunkers, and Radio Dublin’s mountain aerial was alleged to be painted green, and concealed up a tree to ensure it’s survival.</p>
                    <p className="mb-4">Knowing, however, that legitimacy would be a future requirement for our station, we made sure to advise all the local politicians of our bona fides, promising to go off air when the legislation was enacted, and indicating that a ‘proper licence’ was our ultimate aim.</p>
                </div>
                <div>

                </div>
            </section>


        </>

    )

}

export default OurStory;