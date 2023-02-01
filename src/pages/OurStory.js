import { OurStoryImages } from "../images/our-story/OurStoryImages";
const OurStory = () => {

    return (
        <>
            <h1 className="font-guyot italic text-6xl mb-4 ">Our Story</h1>
            <section className="h-full w-full p-8 bg-white text-black text-left text-lg font-GTWalsheim">
                <div>
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
                <div>
                    <img src={OurStoryImages[1]} className="float-left h-80 m-4" />
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
                <div>
                    <img src={OurStoryImages[2]} className="float-left m-4 h-80" />
                    <p className="mb-4">Anyway, a programme group was formed and we started by interviewing each other – sitting in schoolroom desks – on a Marantz  cassette tape recorder which had been gathering dust at home. Soon we were brave enough to interview total strangers, and we began to gather the results.</p>
                    <p className="mb-4">Enter Gerry Roe*, a distinguished ex-pirate. (Read Radio Radio, by Peter Mulryan [pub.1989] – ‘the story of independent, local, community and pirate radio in Ireland’ , to get the flavour of the times; we’re in there, listed as Dundrum Community Radio).</p>
                    <p className="mb-4">Gerry had a small triangular studio – triangular because it was the actual corner of his livingroom! – and there we began editing ; linking our interviews together into programmes on tape. Next –  these tapes needed to be transmitted.</p>
                </div>
            </section>


        </>

    )

}

export default OurStory;