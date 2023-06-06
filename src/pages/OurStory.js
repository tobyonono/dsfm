import { OurStoryImages } from "../images/our-story/OurStoryImages";
const OurStory = () => {

    return (
        <>

            <section className=" hidden h-full w-full p-8 bg-white text-black text-left text-lg font-calibre font-light">
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
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <img src={OurStoryImages[5]} className="float-right mx-4 mb-4 h-96 max-h-full" />
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
                <div className="shadow-lg rounded-3xl p-8 border border-2 overflow-hidden">
                    <img src={OurStoryImages[8]} className="float-right mx-4 mb-4 h-1/5 max-h-full " />
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">SCHOOLDAYS</h2>
                    <p className="mb-4">The local PP. Rev. Joe Fagan was approached and, having heard our plans,  generously offered us an unused room in the local school. With our profile increasing we started gathering community shareholders and supporters. With the money raised we designed and built our first ‘real’  studio in Holy Cross School, with separate areas and sound proofing.</p>
                    <p className="mb-4">Little did we know that this was the first of five studios we would eventually have to build.</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">NO JOY</h2>
                    <p className="mb-4">Suddenly, like a death in the family, came the sickening crunch. Despite a string of promised launch dates, the IRTC decided to put community radio ‘on hold’ sine die, and then the hard, hard slog as we fought to keep the dream alive. Bi-weekly meetings were to continue on for a full incredible five years, and without a launch date we could hardly look a Shareholder in the eye. Not a licence in sight, and community enthusiasm slowly drained into the gutters.</p>
                    <p className="mb-4">Controlled rage at bureaucracy turned out to be the power behind our survival.</p>
                    <p className="mb-4">We were a community of real people with a real need and we could not be turned off like a tap. We would just not go away.</p>
                    <p className="mb-4">Our 6-week Training Course, complete with our own illustrated hand-out sheets,  was now on rails, turning shy “I‘ll never do this” novices into enthusiastic radio operators. Even grey-haired ladies donned headphones, scanned their scripts with one eye, and the level meters with the other, as they questioned their friends intently about their activities. ‘But when do we go on air?’ was their question, for which we had no answer for oh so long..</p>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <img src={OurStoryImages[9]} className="float-right mx-4 mb-4 h-80" />
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">ROADSHOWS</h2>
                    <p className="mb-4">In the doldrums, we searched for novel ways to generate community involvement and to keep our own spirits up.</p>
                    <p className="mb-4">In exchange for printing and distributing what seemed to be 900 million leaflets, we obtained the loan of a caravan from a local hire co. and set up a Roadshow in the six nearest shopping centres – one every Saturday for six weeks.</p>
                    <p className="mb-4">PA speakers on top of the caravan relayed interviews and live music from local guests as we ‘tried out’ local radio on the shoppers. Reaction was inspiring, many shoppers complaining that they couldn’t pick us up on their car radios. Our leaflets explained why, and asked for support.</p>
                    <div className="flex flex-row w-full gap-4 basis-1/2">
                        <img src={OurStoryImages[10]} className="my-4 h-96" />
                        <img src={OurStoryImages[11]} className="my-4 h-96" />
                    </div>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">SCHOOLS ART COMPETITION</h2>
                    <p className="mb-4">Children from several local schools were asked to send in a drawing to illustrate My Very Own Radio Station. Hundreds of entries flooded in and the winners were given their prizes and ‘interviewed’ on tape for a simulated Broadcast Weekend. (see below) Our volunteers were gaining invaluable experience.

                        Interviews and music were all very well in small spurts – but could we do it non-stop for hours at a time – like ‘real radio’?  We determined to find out. A Simulated Radio Weekend was announced, and a full Schedule of programmes and presenters was set up. An Exhibition was also mounted, and public and politicians were invited along for ‘tea with radio’.</p>
                    <p className="mb-4">‘Live’ programmes commenced at 9am, in our recently completed studios in Holy Cross School, and continued until 9pm.</p>
                    <div className="flex flex-row w-full gap-4">
                        <img src={OurStoryImages[12]} className="my-4 w-1/2" />
                        <img src={OurStoryImages[13]} className="my-4 w-1/2" />
                    </div>
                    <div>
                        <img src={OurStoryImages[14]} className="float-right mx-4 mb-4 h-80" />
                        <p className="mb-4">Round table discussion programmes were held, wrapped up, and hand-overs made to music programme presenters in the studio next door. Heaving bodies moved about clutching their marked-up schedules, and scripts.</p>
                        <p className="mb-4">Kevin Walker wielded a fearsome VHS video camera among the crowd.</p>
                        <p className="mb-4">No room in our cramped studio meant we had to relay pictures from our camera  to a TV set next door and programmes were heard on loudspeakers. Reports from the politicians and  tea-drinking well-wishers  were that it sounded rather convincing…</p>
                        <p className="mb-4">After Day 1 (Sat.) we KNEW we could do it for real. Day 2 was the icing on the cake. We could EAT radio now!</p>

                    </div>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">ALL AT SEA</h2>
                    <p className="mb-4">Then someone had a  brainwave: lets’ all go to sea!  We decided that our annual ‘state of the union’ meeting would be held on board the  Stena ferry bound for Hollyhead.</p>
                    <p className="mb-4">This would be a shot in the arm for our volunteers who were beginning to feel that community radio would never come.</p>
                    <p className="mb-4">There’s something about a meeting on the high seas that inspires camaraderie and enthusiasm. Everything went swimmingly (groan), including a slide show, and a suitably edited video of that Simulated Broadcast Weekend.</p>
                    <p className="mb-4">A few hours in Hollyhead, and back home again that evening: we were  ready to launch community radio with pure adrenalin-power, if that were possible!</p>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">AMARC etc</h2>
                    <p className="mb-4">My memories of this next period blur into a melange of meetings, events, and ever more meetings. Jack Byrne (NEAR FM) was a tower of strength, enthusiasm, and organisation.</p>
                    <p className="mb-4">I remember a meeting of Dublin postulants in the Mansion House where we all carved up the map of Dublin and agreed our respective areas for presentation as a solution to the IRTC. The current Lord Mayor Mr.Sean Haughey kindly spoke, provided refreshments, and agreed to become patron of the Dublin City Radio Group.</p>
                    <p className="mb-4">Next, Jack arranged  a Seminar at DCU at which the Minister for Communication, Mr. Ray Burke gave the keynote address. He said all the right things, and seemed to have a grasp of what we were about. Community groups should set about applying for licences, he said. Things seemed to be coming together at last.</p>
                    <p className="mb-4">But of course they were not. The Minister’s ideas and those of the newly formed  Independent Radio & Television Commission did not coincide. This applying for licences may have been  his idea, but it wasn’t theirs…..</p>
                    <div>
                        <img src={OurStoryImages[15]} className="float-right mx-4 mb-4 h-[100]" />
                        <p className="mb-4">Then Jack introduced us to AMARC, the worldwide association for Community Radio and we took on board their excellent 10-point Charter which reflected all our aspirations for community empowerment. We were so pleased to see that community radio had an international dimension, and that our concerns were so alike.</p>
                        <p className="mb-4">And then there was the pride in the fact that Dublin was hosting  an AMARC convention in UCD. Delegates came from more countries that we knew existed. Where, in God’s name, is Burkino Faso? I wondered, having just chatted to two delegates clad in brightly coloured robes. I headed quickly, but discreetly, for the nearest Atlas.</p>
                        <p className="mb-4">It gradually became apparent that democracy, unlike the comfortable environs of Western Europe, existed in only a minority of these countries. The search for freedom and justice involving the use of community radio had a decidedly, but quite understandable, revolutionary whiff about it.</p>
                        <p className="mb-4">Seeing the IRTC Chairman Justice Henchey at one of these sessions, I wondered at his reaction to this. In hindsight, it’s possible that his exposure to what may have superficially appeared to be a bunch of lefty revolutionaries may well have put the tin hat on the chances of Irish Community Radio Licences being issued on his watch.</p>
                        <p className="mb-4">The actual reasons advanced by the IRTC at the time were truly inexplicable..</p>
                        <p className="mb-4">Meetings with politicians continued unabated, but unfortunately without result.</p>
                        <p className="mb-4">A brief flurry as an all-Dublin Licence was announced. Not local community radio, we thought, but maybe a start. A group was formed, a meeting was held in the Shelbourne Hotel,  and a reasonable application was made, but turned out to be un-successful in the face of an alternative group. Dark mutterings about insider influence and  people being on the inside track ensued. An article in Phoenix magazine appeared to confirm our suspicions.</p>
                        <p className="mb-4">Three Dublin groups then approached Denis O’Brien of 98FM, following the publication of an article by him which looked sympathetically on the concept of local radio. A proposal to use existing waiting CR frequencies as opt-outs, with 98FM as the main umbrella sustaining service appeared to have some merit. ’We might not have to apply for a licence’ went the thinking. I remember being in the group which met Mr. O’Brien at the time, but like all community radio projects around that time, it gradually fizzled out.</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">NIRVANA, or similar</h2>
                    <p className="mb-4">The Patron Saint of Community Radio turned out to be Michael D.O’Higgins</p>
                    <p className="mb-4">With a change of Government, the new Minister of Communications opened his files, came upon Community Radio, and Saw That It Was Good.</p>
                    <p className="mb-4">With one wave of his magic wand he unveiled a new Broadcasting Act, undid the 5-year logjam, and instructed the IRTC, under it’s new Chief Executive to begin the Licencing procedure. There was a God in heaven after all!</p>
                    <div>
                        <img src={OurStoryImages[16]} className="float-right mx-4 mb-4 h-96" />
                        <p className="mb-4">Expressions of Interest (and, by God, were we interested!) were invited (yet again) by the IRTC and ours rocketted into their offices. The IRTC had a new boss, Mr. Niall Stokes, the founder/Editor  of Hot Press no less. It seemed that the known world had rotated several degrees left on it’s axis, and we were mighty pleased with the result.</p>
                        <p className="mb-4">I remember consuming the excellent IRTC ‘Guide to Licence Applications’ and being quite impressed as the application guided your thoughts towards all the facets that needed to be addressed in developing a radio station from a basket of ideas and enthusiasms. We started on The Long Type, as our Application produced an outbreak of Digitalis Flaticus. It was certainly a week before the ends of my fingers reverted to their usual curved format.</p>
                        <p className="mb-4">Anyway, we prepared our brief, practised our delivery, manufactured our Powerpoint slides, produced our logo, crossed our fingers and made for the Oral Hearings, feeling not a little like clients of the Nuremberg Trials. The hearings layout helped to reinforce this idea, as we sat in a line angled towards a central screen, the IRTC committee facing us on the opposite side. Our female presenter played a blinder (we thought) and various supplementary questions were then addressed to the Experts (i.e. us!)</p>
                        <p className="mb-4">After it was all over, we got some unofficial comments that we hadn’t done too badly but proper breathing did not return until The Letter arrived, advising that we could get ready to sign a contract to broadcast. We had attempted Beecher’s Brook and had succeeded!</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PREMISES, PREMISES (part 2)</h2>
                    <p className="mb-4">Quick Flashback: – Used as we were to unpleasant surprises, we received another unexpected setback. We had recently been informed that the school, in which our new studios had been built with such enthusiasm (and financial outlay of Shareholders funds) would not allow us to broadcast from there. With a licence in the offing this seemed remarkably like a terminal event : No Premises = No Licence.</p>
                    <p className="mb-4">Our Station Manager, by now skilled in negotiating minefields, managed to convince the owner of the old Dundrum PYE Centre that a community radio station on his premises would enhance his standing in the locality. Against all odds, Mr Aidan Stanley – who had previously dabbled with local radio – allowed us the use of five rooms rent-free, and earned our undying gratitude.</p>
                    <p className="mb-4">We set to, and began to build our second studio / office complex. In a short number of weeks the interior was gutted, rebuilt, wired, tested and ready to go with two on-air and one editing studios. All done by the same trio that had cut it’s teeth on the school studios : Mike, Conal, and Dave.</p>
                    <div>
                        <img src={OurStoryImages[17]} className="float-right mx-4 mb-4 h-96" />
                        <p className="mb-4">And so on Saturday  5th June 1995, the sun shone extra brightly on the Dublin South Community Radio studios and offices, located in the historic PYE centre where radios had been produced in the nearby factory since the late 1930’s, and all through The Emergency (as World War II was known in Ireland).</p>
                        <p className="mb-4">I had survived a Brian Farrell interview  that morning, and had got our station jingle played on RTE Radio as the first Dublin CR station. Local people had gathered in their finery to have a snack and hear the opening speeches from politicians, IRTC officials, and our (late) chairman Tom Murchan. Our station was on-air from 2pm.and our first news bulletins carried snatches of the opening speeches – hurriedly  extracted from the Marantz tape recorder.</p>
                        <p className="mb-4">That tired old phrase ‘a new era had begun’ seemed strangely appropriate.</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">THE BUSINESS of RADIO</h2>
                    <p className="mb-4">Based on a FAS CE scheme, we began to see the station evolve from it’s relatively amateur start-up to what was to become more of a business operation.</p>
                    <p className="mb-4">Suddenly Administration (an almost unknown activity) began to assume it’s own importance: the newly born  Community Radio Animal had to be fed and watered.</p>
                    <p className="mb-4">A plethora of new concerns hove into view as the ‘fulltime’ FAS staff were allocated to various necessary duties. Telephone Bills, stationery, Bank Accounts, The Registrar of Friendly Societies, The Auditor, Copyright Fees, Insurance, The IRTC Evaluation Visits, Board Meetings, employment problems…was there really time to ‘do’ radio as well as all that lot?  Strangely, there was.</p>
                    <p className="mb-4">However, in our innocence, we had anticipated that a tidal wave of community groups would beat a path to our door, foaming with enthusiasm, and demanding access to a microphone. Our job would be to take tea, reclining on an adjacent chaise longue, and direct  them to the nearest studio, from which would pour forth radio of supreme excellence. It wasn’t quite like that, however.</p>
                    <p className="mb-4">Very few actually came.</p>
                    <p className="mb-4">Successive Irish Governments had kept a stranglehold on radio, to such a degree that people didn’t know what to do with it when it arrived. Radio had always been passive. It was for listening TO.</p>
                    <p className="mb-4">Our next task was to go out and meet the community, to convince them that this new-fangled radio thing really had something to offer THEM.</p>
                    <p className="mb-4">So for the next year we met every possible shade of community group. Some immediately grasped the potential and came on board enthusiastically.</p>
                    <p className="mb-4">Others….well they just never seemed to understand.</p>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PROGRAMMES</h2>
                    <p className="mb-4">Programmes started up OK,  but gradually evolved from what WE thought was necessary, to what OTHERS thought was necessary.</p>
                    <p className="mb-4">We opened a Sunday ‘God slot’ to all the organised Churches, who produced an excellent cross section of programmes. (Personally, I’m still waiting to see radio creatively used to address those for whom organised religion has no meaning – i.e. those who aren’t comfortably among the “saved”)</p>
                    <p className="mb-4">The sight of three 5-year olds, clustered around a mike, reading their own poems and wearing ENORMOUS Beyer headphones will always stay with me : the epitome of totally un-commercial radio.</p>
                    <p className="mb-4">Our Schools Quiz: 18 teams, 10,000 questions each season, recorded locally and producing 9 programmes was a great interactive success. A local traditional music programme, recorded in a nearby pub, produced about 65 programmes, gave each group a free demo-tape, and got an IRTC Award.</p>

                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                    <img src={OurStoryImages[18]} className="float-right mx-4 mb-4 h-96" />

                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">MOVING TIMES</h2>
                    <p className="mb-4">Our tenancy of the old PYE Centre was always going to be temporary: we had seen the plans of a shopping centre and hotel which were to be built there, but nobody was sure quite when. Relatively suddenly the site was sold to a large developer – who would eventually build the New Dundrum Town Centre – and we had three months to find a new home.</p>
                    <p className="mb-4">We approached Dun Laoghaire Rathdown Co. Council who kindly allocated us two rooms in the Old School Loreto Avenue – which was already a base for several other FAS schemes. We now began, for the fourth time, the job of building a radio station from scratch.</p>
                    <p className="mb-4">Money was ultra tight so we approached a small local builder to put a door between the two rooms, and divide up the second into three studios, a  desk space and a small room to house the transmitter / logger. He put up studded partition, plastered on one side, and left all the rest to us. We filled the partition space with Rockwool –   (cut with a garden shears) – and covered it with fireproof tweed material stapled into position. This was a somewhat precarious job in view of the 9ft. schoolroom ceilings. By now we had perfected the art of living on fresh air.</p>
                    <p className="mb-4">Chairs,  filing cabinets and some carpet came from a Bank of Ireland office being renovated, and screened cable was left over from some Jacobs factory wiring. A bag of  ‘XLR’ audio plugs came from a begging letter to Windmill Lane Studios who were (thankfully) upgrading to the moulded variety. The (distinctly secondhand ) main carpet was supplied by somebody’s mother who was glad to get rid of it. A few spare lengths of the tweed covering were hung in one studio to absorb the sound</p>
                    <p className="mb-4">Using advanced geometrical physics we managed to cut up some circular B of I workstations into two rectangular desks to take the sound mixers. The downside is that after a day pushing the electric jigsaw your drinking arm stiffens up and a week of enforced teetotal abstinence occurs. No pain, no gain? Finally the studios were built and painted,  the new aerial was erected and, about a mile from our previous location, were in business again. We had stayed on-air throughout the entire operation.</p>
                    <div>
                        <img src={OurStoryImages[19]} className="float-right mx-4 mb-4 h-96" />
                        <p className="mb-4">About four years on, we began to hear stories about the new Dundrum Town Centre – the biggest in Europe – to be built in the centre of Dundrum. The developers were anxious to assist some community groups by providing space in the new centre. We quickly made contact, supplied proposed layout drawings, and after about two years we got confirmation that we would be allocated a location on the 5th floor of this prestige development. Ironically our first real studios (in the Pye Centre) are buried somewhere below Harvey Nicholls’ new underground carpark.  We set to, yet again, designing our layout and wiring details. We would now provide for possible ethnic broadcasting, our plans allowing for either of two studios to go on air independently. This would be our fourth radio station built. Phew!</p>
                        <p className="mb-4">If all went well we would be in our new location by September 2005*</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">

                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PEOPLE</h2>
                    <p className="mb-4">We have always had a number of disabled people in the station..</p>
                    <p className="mb-4">Many arrived with no skills, a poor self-image, and a low employment potential.</p>
                    <p className="mb-4">They left with a new personal dignity, new skills, and greatly improved job prospects.</p>
                    <p className="mb-4">Several have since joined mainstream radio stations, and other similar employment.</p>
                    <p className="mb-4">Community radio – helping those who make programmes just as much as those who enjoy listening to them.</p>
                    <p className="mb-4">The story continues….</p>

                    <div>
                        <img src={OurStoryImages[20]} className="float-right mx-4 mb-4 h-96" />
                        <p className="mb-4">We moved to The Old School, Nutgrove, and operated successfully for several years. But finally, after years of negotiation, and agreeing space and facilities , we moved into the new Dundrum Town Centre  with fine new studios that you could bring a visitor into without wincing…. Yet again, in our fifth location, the empty rooms were wired and equipped by Mike and Dave of DSFM, and linked to a new aerial on top of the Centre.</p>
                        <p className="mb-4">So, after various administrative delays (not ours OR the Town Centre)  we finally got on air in DTC on Thurs. 20th September 2007 – without losing one day of broadcasting. And, we are there ever since! We are extremely grateful to the Town Centre and also both FAS and POBAL who fund part-time and fulltime staff, who are learning all about radio.</p>
                        <p className="mb-4">These skills have already helped several staff to go on to employment in the sector.</p>
                        <p className="mb-4">Broadcasting hours have been extended, and we are now on-air from 11am to 11pm, and 34 hours online 365 days a year, with a little help from our computerised scheduling equipment – an absolute blessing on holiday weekends and Christmas Day!</p>
                        <p className="mb-4">Our programmes now go worldwide – streamed via the internet (chocolates arrived from a ‘Classic Sunday’ listener in Canada) and many are also on Podcast. (i.e available for playback).</p>
                        <p className="mb-4">Hard to believe that it all started with people in school desks interviewing the person beside them for practice…</p>
                        <p className="mb-4">Transition-year students join in programmes and get invaluable work experience. Media students get their class projects on air. Kids get to broadcast to mammys & neighbours. Retired people discuss their concerns & play their music.</p>
                        <p className="mb-4">Young trainee journalists cover local news stories and then read them on air. Songwriters and emerging bands get their first break here – our ’On The Verge’ programme is a mecca for new Dublin talent. Ethnic groups broadcast in their own language (Korean, Indian, Polish, Spanish)</p>
                        <p className="mb-4">Writers and poets display their wares; a ‘DJ for a Day’ spot allowed anyone to come on and play an hour of their music. They arrived, fizzing with excitement!</p>
                        <p className="mb-4">Real  people doing things that are important to themselves</p>
                        <p className="mb-4">Real personal development in action.</p>
                        <p className="mb-4">The community listens to it’s life being lived…life gets a bit better for everyone.</p>
                        <p className="mb-4">And….. like the Hokey Kokey……..that’s what it’s all about!</p>
                        <img src={OurStoryImages[21]} className=" mx-auto mb-4" />

                    </div>
                </div>
            </section>
            <section className="relative grid grid-row-[repeat(12,_1fr)] items-center font-nitti text-sm shadow-lg rounded-lg">
                <div className="relative h-72 sm:h-96 md:h-112 lg:h-cover-image -z-10">
                    <img className="select-none object-cover bg-black/10 absolute h-full w-full left-0 top-0 right-0 bottom-0 object-center text-[transparent]"
                        src='https://dublinsouthfm.ie/wp-content/webpc-passthru.php?src=https://dublinsouthfm.ie/wp-content/uploads/2021/09/Mike-Purcell-Reception-600x450.png&nocache=1' />
                </div>
                <div className="lg:-mt-24">
                    <section>
                        <div className="ml-auto mr-auto p-4 sm:p-8 bg-white max-w-5xl">
                            <div className="max-w-none text-base">
                                <h1 className="font-GTWalsheim text-5xl mb-6 font-bold underline">Our Story</h1>

                            </div>
                            <section className=" h-full w-full  bg-white text-black text-left text-lg font-calibre font-light">
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
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <img src={OurStoryImages[5]} className="float-right mx-4 mb-4 h-96 max-h-full" />
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
                                <div className="shadow-lg rounded-3xl p-8 border border-2 overflow-hidden">
                                    <img src={OurStoryImages[8]} className="float-right mx-4 mb-4 h-1/5 max-h-full " />
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">SCHOOLDAYS</h2>
                                    <p className="mb-4">The local PP. Rev. Joe Fagan was approached and, having heard our plans,  generously offered us an unused room in the local school. With our profile increasing we started gathering community shareholders and supporters. With the money raised we designed and built our first ‘real’  studio in Holy Cross School, with separate areas and sound proofing.</p>
                                    <p className="mb-4">Little did we know that this was the first of five studios we would eventually have to build.</p>
                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">NO JOY</h2>
                                    <p className="mb-4">Suddenly, like a death in the family, came the sickening crunch. Despite a string of promised launch dates, the IRTC decided to put community radio ‘on hold’ sine die, and then the hard, hard slog as we fought to keep the dream alive. Bi-weekly meetings were to continue on for a full incredible five years, and without a launch date we could hardly look a Shareholder in the eye. Not a licence in sight, and community enthusiasm slowly drained into the gutters.</p>
                                    <p className="mb-4">Controlled rage at bureaucracy turned out to be the power behind our survival.</p>
                                    <p className="mb-4">We were a community of real people with a real need and we could not be turned off like a tap. We would just not go away.</p>
                                    <p className="mb-4">Our 6-week Training Course, complete with our own illustrated hand-out sheets,  was now on rails, turning shy “I‘ll never do this” novices into enthusiastic radio operators. Even grey-haired ladies donned headphones, scanned their scripts with one eye, and the level meters with the other, as they questioned their friends intently about their activities. ‘But when do we go on air?’ was their question, for which we had no answer for oh so long..</p>

                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <img src={OurStoryImages[9]} className="float-right mx-4 mb-4 h-80" />
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">ROADSHOWS</h2>
                                    <p className="mb-4">In the doldrums, we searched for novel ways to generate community involvement and to keep our own spirits up.</p>
                                    <p className="mb-4">In exchange for printing and distributing what seemed to be 900 million leaflets, we obtained the loan of a caravan from a local hire co. and set up a Roadshow in the six nearest shopping centres – one every Saturday for six weeks.</p>
                                    <p className="mb-4">PA speakers on top of the caravan relayed interviews and live music from local guests as we ‘tried out’ local radio on the shoppers. Reaction was inspiring, many shoppers complaining that they couldn’t pick us up on their car radios. Our leaflets explained why, and asked for support.</p>
                                    <div className="flex flex-row w-full gap-4 basis-1/2">
                                        <img src={OurStoryImages[10]} className="my-4 h-96" />
                                        <img src={OurStoryImages[11]} className="my-4 h-96" />
                                    </div>

                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">SCHOOLS ART COMPETITION</h2>
                                    <p className="mb-4">Children from several local schools were asked to send in a drawing to illustrate My Very Own Radio Station. Hundreds of entries flooded in and the winners were given their prizes and ‘interviewed’ on tape for a simulated Broadcast Weekend. (see below) Our volunteers were gaining invaluable experience.

                                        Interviews and music were all very well in small spurts – but could we do it non-stop for hours at a time – like ‘real radio’?  We determined to find out. A Simulated Radio Weekend was announced, and a full Schedule of programmes and presenters was set up. An Exhibition was also mounted, and public and politicians were invited along for ‘tea with radio’.</p>
                                    <p className="mb-4">‘Live’ programmes commenced at 9am, in our recently completed studios in Holy Cross School, and continued until 9pm.</p>
                                    <div className="flex flex-row w-full gap-4">
                                        <img src={OurStoryImages[12]} className="my-4 w-1/2" />
                                        <img src={OurStoryImages[13]} className="my-4 w-1/2" />
                                    </div>
                                    <div>
                                        <img src={OurStoryImages[14]} className="float-right mx-4 mb-4 h-80" />
                                        <p className="mb-4">Round table discussion programmes were held, wrapped up, and hand-overs made to music programme presenters in the studio next door. Heaving bodies moved about clutching their marked-up schedules, and scripts.</p>
                                        <p className="mb-4">Kevin Walker wielded a fearsome VHS video camera among the crowd.</p>
                                        <p className="mb-4">No room in our cramped studio meant we had to relay pictures from our camera  to a TV set next door and programmes were heard on loudspeakers. Reports from the politicians and  tea-drinking well-wishers  were that it sounded rather convincing…</p>
                                        <p className="mb-4">After Day 1 (Sat.) we KNEW we could do it for real. Day 2 was the icing on the cake. We could EAT radio now!</p>

                                    </div>

                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">ALL AT SEA</h2>
                                    <p className="mb-4">Then someone had a  brainwave: lets’ all go to sea!  We decided that our annual ‘state of the union’ meeting would be held on board the  Stena ferry bound for Hollyhead.</p>
                                    <p className="mb-4">This would be a shot in the arm for our volunteers who were beginning to feel that community radio would never come.</p>
                                    <p className="mb-4">There’s something about a meeting on the high seas that inspires camaraderie and enthusiasm. Everything went swimmingly (groan), including a slide show, and a suitably edited video of that Simulated Broadcast Weekend.</p>
                                    <p className="mb-4">A few hours in Hollyhead, and back home again that evening: we were  ready to launch community radio with pure adrenalin-power, if that were possible!</p>
                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">AMARC etc</h2>
                                    <p className="mb-4">My memories of this next period blur into a melange of meetings, events, and ever more meetings. Jack Byrne (NEAR FM) was a tower of strength, enthusiasm, and organisation.</p>
                                    <p className="mb-4">I remember a meeting of Dublin postulants in the Mansion House where we all carved up the map of Dublin and agreed our respective areas for presentation as a solution to the IRTC. The current Lord Mayor Mr.Sean Haughey kindly spoke, provided refreshments, and agreed to become patron of the Dublin City Radio Group.</p>
                                    <p className="mb-4">Next, Jack arranged  a Seminar at DCU at which the Minister for Communication, Mr. Ray Burke gave the keynote address. He said all the right things, and seemed to have a grasp of what we were about. Community groups should set about applying for licences, he said. Things seemed to be coming together at last.</p>
                                    <p className="mb-4">But of course they were not. The Minister’s ideas and those of the newly formed  Independent Radio & Television Commission did not coincide. This applying for licences may have been  his idea, but it wasn’t theirs…..</p>
                                    <div>
                                        <img src={OurStoryImages[15]} className="float-right mx-4 mb-4 h-[100]" />
                                        <p className="mb-4">Then Jack introduced us to AMARC, the worldwide association for Community Radio and we took on board their excellent 10-point Charter which reflected all our aspirations for community empowerment. We were so pleased to see that community radio had an international dimension, and that our concerns were so alike.</p>
                                        <p className="mb-4">And then there was the pride in the fact that Dublin was hosting  an AMARC convention in UCD. Delegates came from more countries that we knew existed. Where, in God’s name, is Burkino Faso? I wondered, having just chatted to two delegates clad in brightly coloured robes. I headed quickly, but discreetly, for the nearest Atlas.</p>
                                        <p className="mb-4">It gradually became apparent that democracy, unlike the comfortable environs of Western Europe, existed in only a minority of these countries. The search for freedom and justice involving the use of community radio had a decidedly, but quite understandable, revolutionary whiff about it.</p>
                                        <p className="mb-4">Seeing the IRTC Chairman Justice Henchey at one of these sessions, I wondered at his reaction to this. In hindsight, it’s possible that his exposure to what may have superficially appeared to be a bunch of lefty revolutionaries may well have put the tin hat on the chances of Irish Community Radio Licences being issued on his watch.</p>
                                        <p className="mb-4">The actual reasons advanced by the IRTC at the time were truly inexplicable..</p>
                                        <p className="mb-4">Meetings with politicians continued unabated, but unfortunately without result.</p>
                                        <p className="mb-4">A brief flurry as an all-Dublin Licence was announced. Not local community radio, we thought, but maybe a start. A group was formed, a meeting was held in the Shelbourne Hotel,  and a reasonable application was made, but turned out to be un-successful in the face of an alternative group. Dark mutterings about insider influence and  people being on the inside track ensued. An article in Phoenix magazine appeared to confirm our suspicions.</p>
                                        <p className="mb-4">Three Dublin groups then approached Denis O’Brien of 98FM, following the publication of an article by him which looked sympathetically on the concept of local radio. A proposal to use existing waiting CR frequencies as opt-outs, with 98FM as the main umbrella sustaining service appeared to have some merit. ’We might not have to apply for a licence’ went the thinking. I remember being in the group which met Mr. O’Brien at the time, but like all community radio projects around that time, it gradually fizzled out.</p>
                                    </div>
                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">NIRVANA, or similar</h2>
                                    <p className="mb-4">The Patron Saint of Community Radio turned out to be Michael D.O’Higgins</p>
                                    <p className="mb-4">With a change of Government, the new Minister of Communications opened his files, came upon Community Radio, and Saw That It Was Good.</p>
                                    <p className="mb-4">With one wave of his magic wand he unveiled a new Broadcasting Act, undid the 5-year logjam, and instructed the IRTC, under it’s new Chief Executive to begin the Licencing procedure. There was a God in heaven after all!</p>
                                    <div>
                                        <img src={OurStoryImages[16]} className="float-right mx-4 mb-4 h-96" />
                                        <p className="mb-4">Expressions of Interest (and, by God, were we interested!) were invited (yet again) by the IRTC and ours rocketted into their offices. The IRTC had a new boss, Mr. Niall Stokes, the founder/Editor  of Hot Press no less. It seemed that the known world had rotated several degrees left on it’s axis, and we were mighty pleased with the result.</p>
                                        <p className="mb-4">I remember consuming the excellent IRTC ‘Guide to Licence Applications’ and being quite impressed as the application guided your thoughts towards all the facets that needed to be addressed in developing a radio station from a basket of ideas and enthusiasms. We started on The Long Type, as our Application produced an outbreak of Digitalis Flaticus. It was certainly a week before the ends of my fingers reverted to their usual curved format.</p>
                                        <p className="mb-4">Anyway, we prepared our brief, practised our delivery, manufactured our Powerpoint slides, produced our logo, crossed our fingers and made for the Oral Hearings, feeling not a little like clients of the Nuremberg Trials. The hearings layout helped to reinforce this idea, as we sat in a line angled towards a central screen, the IRTC committee facing us on the opposite side. Our female presenter played a blinder (we thought) and various supplementary questions were then addressed to the Experts (i.e. us!)</p>
                                        <p className="mb-4">After it was all over, we got some unofficial comments that we hadn’t done too badly but proper breathing did not return until The Letter arrived, advising that we could get ready to sign a contract to broadcast. We had attempted Beecher’s Brook and had succeeded!</p>
                                    </div>
                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PREMISES, PREMISES (part 2)</h2>
                                    <p className="mb-4">Quick Flashback: – Used as we were to unpleasant surprises, we received another unexpected setback. We had recently been informed that the school, in which our new studios had been built with such enthusiasm (and financial outlay of Shareholders funds) would not allow us to broadcast from there. With a licence in the offing this seemed remarkably like a terminal event : No Premises = No Licence.</p>
                                    <p className="mb-4">Our Station Manager, by now skilled in negotiating minefields, managed to convince the owner of the old Dundrum PYE Centre that a community radio station on his premises would enhance his standing in the locality. Against all odds, Mr Aidan Stanley – who had previously dabbled with local radio – allowed us the use of five rooms rent-free, and earned our undying gratitude.</p>
                                    <p className="mb-4">We set to, and began to build our second studio / office complex. In a short number of weeks the interior was gutted, rebuilt, wired, tested and ready to go with two on-air and one editing studios. All done by the same trio that had cut it’s teeth on the school studios : Mike, Conal, and Dave.</p>
                                    <div>
                                        <img src={OurStoryImages[17]} className="float-right mx-4 mb-4 h-96" />
                                        <p className="mb-4">And so on Saturday  5th June 1995, the sun shone extra brightly on the Dublin South Community Radio studios and offices, located in the historic PYE centre where radios had been produced in the nearby factory since the late 1930’s, and all through The Emergency (as World War II was known in Ireland).</p>
                                        <p className="mb-4">I had survived a Brian Farrell interview  that morning, and had got our station jingle played on RTE Radio as the first Dublin CR station. Local people had gathered in their finery to have a snack and hear the opening speeches from politicians, IRTC officials, and our (late) chairman Tom Murchan. Our station was on-air from 2pm.and our first news bulletins carried snatches of the opening speeches – hurriedly  extracted from the Marantz tape recorder.</p>
                                        <p className="mb-4">That tired old phrase ‘a new era had begun’ seemed strangely appropriate.</p>
                                    </div>
                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">THE BUSINESS of RADIO</h2>
                                    <p className="mb-4">Based on a FAS CE scheme, we began to see the station evolve from it’s relatively amateur start-up to what was to become more of a business operation.</p>
                                    <p className="mb-4">Suddenly Administration (an almost unknown activity) began to assume it’s own importance: the newly born  Community Radio Animal had to be fed and watered.</p>
                                    <p className="mb-4">A plethora of new concerns hove into view as the ‘fulltime’ FAS staff were allocated to various necessary duties. Telephone Bills, stationery, Bank Accounts, The Registrar of Friendly Societies, The Auditor, Copyright Fees, Insurance, The IRTC Evaluation Visits, Board Meetings, employment problems…was there really time to ‘do’ radio as well as all that lot?  Strangely, there was.</p>
                                    <p className="mb-4">However, in our innocence, we had anticipated that a tidal wave of community groups would beat a path to our door, foaming with enthusiasm, and demanding access to a microphone. Our job would be to take tea, reclining on an adjacent chaise longue, and direct  them to the nearest studio, from which would pour forth radio of supreme excellence. It wasn’t quite like that, however.</p>
                                    <p className="mb-4">Very few actually came.</p>
                                    <p className="mb-4">Successive Irish Governments had kept a stranglehold on radio, to such a degree that people didn’t know what to do with it when it arrived. Radio had always been passive. It was for listening TO.</p>
                                    <p className="mb-4">Our next task was to go out and meet the community, to convince them that this new-fangled radio thing really had something to offer THEM.</p>
                                    <p className="mb-4">So for the next year we met every possible shade of community group. Some immediately grasped the potential and came on board enthusiastically.</p>
                                    <p className="mb-4">Others….well they just never seemed to understand.</p>

                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PROGRAMMES</h2>
                                    <p className="mb-4">Programmes started up OK,  but gradually evolved from what WE thought was necessary, to what OTHERS thought was necessary.</p>
                                    <p className="mb-4">We opened a Sunday ‘God slot’ to all the organised Churches, who produced an excellent cross section of programmes. (Personally, I’m still waiting to see radio creatively used to address those for whom organised religion has no meaning – i.e. those who aren’t comfortably among the “saved”)</p>
                                    <p className="mb-4">The sight of three 5-year olds, clustered around a mike, reading their own poems and wearing ENORMOUS Beyer headphones will always stay with me : the epitome of totally un-commercial radio.</p>
                                    <p className="mb-4">Our Schools Quiz: 18 teams, 10,000 questions each season, recorded locally and producing 9 programmes was a great interactive success. A local traditional music programme, recorded in a nearby pub, produced about 65 programmes, gave each group a free demo-tape, and got an IRTC Award.</p>

                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">
                                    <img src={OurStoryImages[18]} className="float-right mx-4 mb-4 h-96" />

                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">MOVING TIMES</h2>
                                    <p className="mb-4">Our tenancy of the old PYE Centre was always going to be temporary: we had seen the plans of a shopping centre and hotel which were to be built there, but nobody was sure quite when. Relatively suddenly the site was sold to a large developer – who would eventually build the New Dundrum Town Centre – and we had three months to find a new home.</p>
                                    <p className="mb-4">We approached Dun Laoghaire Rathdown Co. Council who kindly allocated us two rooms in the Old School Loreto Avenue – which was already a base for several other FAS schemes. We now began, for the fourth time, the job of building a radio station from scratch.</p>
                                    <p className="mb-4">Money was ultra tight so we approached a small local builder to put a door between the two rooms, and divide up the second into three studios, a  desk space and a small room to house the transmitter / logger. He put up studded partition, plastered on one side, and left all the rest to us. We filled the partition space with Rockwool –   (cut with a garden shears) – and covered it with fireproof tweed material stapled into position. This was a somewhat precarious job in view of the 9ft. schoolroom ceilings. By now we had perfected the art of living on fresh air.</p>
                                    <p className="mb-4">Chairs,  filing cabinets and some carpet came from a Bank of Ireland office being renovated, and screened cable was left over from some Jacobs factory wiring. A bag of  ‘XLR’ audio plugs came from a begging letter to Windmill Lane Studios who were (thankfully) upgrading to the moulded variety. The (distinctly secondhand ) main carpet was supplied by somebody’s mother who was glad to get rid of it. A few spare lengths of the tweed covering were hung in one studio to absorb the sound</p>
                                    <p className="mb-4">Using advanced geometrical physics we managed to cut up some circular B of I workstations into two rectangular desks to take the sound mixers. The downside is that after a day pushing the electric jigsaw your drinking arm stiffens up and a week of enforced teetotal abstinence occurs. No pain, no gain? Finally the studios were built and painted,  the new aerial was erected and, about a mile from our previous location, were in business again. We had stayed on-air throughout the entire operation.</p>
                                    <div>
                                        <img src={OurStoryImages[19]} className="float-right mx-4 mb-4 h-96" />
                                        <p className="mb-4">About four years on, we began to hear stories about the new Dundrum Town Centre – the biggest in Europe – to be built in the centre of Dundrum. The developers were anxious to assist some community groups by providing space in the new centre. We quickly made contact, supplied proposed layout drawings, and after about two years we got confirmation that we would be allocated a location on the 5th floor of this prestige development. Ironically our first real studios (in the Pye Centre) are buried somewhere below Harvey Nicholls’ new underground carpark.  We set to, yet again, designing our layout and wiring details. We would now provide for possible ethnic broadcasting, our plans allowing for either of two studios to go on air independently. This would be our fourth radio station built. Phew!</p>
                                        <p className="mb-4">If all went well we would be in our new location by September 2005*</p>
                                    </div>
                                </div>
                                <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">

                                    <h2 className="font-GTWalsheim text-2xl mb-4 underline">PEOPLE</h2>
                                    <p className="mb-4">We have always had a number of disabled people in the station..</p>
                                    <p className="mb-4">Many arrived with no skills, a poor self-image, and a low employment potential.</p>
                                    <p className="mb-4">They left with a new personal dignity, new skills, and greatly improved job prospects.</p>
                                    <p className="mb-4">Several have since joined mainstream radio stations, and other similar employment.</p>
                                    <p className="mb-4">Community radio – helping those who make programmes just as much as those who enjoy listening to them.</p>
                                    <p className="mb-4">The story continues….</p>

                                    <div>
                                        <img src={OurStoryImages[20]} className="float-right mx-4 mb-4 h-96" />
                                        <p className="mb-4">We moved to The Old School, Nutgrove, and operated successfully for several years. But finally, after years of negotiation, and agreeing space and facilities , we moved into the new Dundrum Town Centre  with fine new studios that you could bring a visitor into without wincing…. Yet again, in our fifth location, the empty rooms were wired and equipped by Mike and Dave of DSFM, and linked to a new aerial on top of the Centre.</p>
                                        <p className="mb-4">So, after various administrative delays (not ours OR the Town Centre)  we finally got on air in DTC on Thurs. 20th September 2007 – without losing one day of broadcasting. And, we are there ever since!</p>
                                        <p className="mb-4">The following year, in 2008, Dublin South FM was granted a ten-year broadcasting license by the Broadcasting Commission of Ireland.
                                            In 2011, the station increased its daily broadcasting output from 4 pm - 9 pm to 11 am - 11 pm. That same year, Dublin South FM launched its online streaming service, which enabled listeners to tune in from anywhere in the world.</p>
                                        <img src={OurStoryImages[21]} className=" mx-auto mb-4" />

                                    </div>
                                    <div className="shadow-lg rounded-3xl p-8 border border-2 h-full overflow-hidden">

                                        <h2 className="font-GTWalsheim text-2xl mb-4 underline">TODAY</h2>
                                        <p className="mb-4">In June 2020, to mark the station's 25th anniversary as a licensed broadcaster, Dublin South FM began broadcasting 24/7 online.
                                            2020 also saw Dublin South FM commence a long-overdue studio upgrade project during the Covid19 lockdown. With assistance of DLR County Council through their Community Grants Scheme, and in the true spirit of Community Radio, the studio upgrade project was planned, designed and built entirely by members of the Tús Community Employment Scheme, who pooled their collective talents and expertise to build a state-of-the-art broadcasting studio for our community.</p>
                                        <p className="mb-4">Today, the station broadcasts 84 hours of programmes each week from its studios in Dundrum Town Centre that showcases real people making a difference in our community.   We provide specialist cultural programming for minority groups such as the LGBT+ community, or various ethnic and religious minority groups from Europe, Africa, and Asia.  Dublin South FM promotes local artists and events, such as local theatre groups, writers and musicians. We also promote local events and activities to encourage greater inclusion and participation from our elderly, and we provide those in our community with disabilities with the opportunity to produce radio programmes with assistance from our helpful staff.</p>

                                       <p className='mb-4'>Our aim is to enhance community cohesion through community participation in our programmes, and the distribution of information Dublin South FM provides to our circa 3,000 daily listeners, by focusing on socially beneficial programming and supporting and mentoring the 80+ volunteers who produce it.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>


        </>

    )

}

export default OurStory;