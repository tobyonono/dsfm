import GCCC from '../GCCC.pdf';
import COPS from '../COPS.pdf';
import CCCC from '../CCCC.pdf';
const CodeOfPractice = () => {

    return (
        <div>
          
            <section className="relative grid grid-row-[repeat(12,_1fr)] items-center font-nitti text-sm shadow-lg rounded-lg">
                <div className="relative h-72 sm:h-96 md:h-112 lg:h-cover-image -z-10">
                    <img className="select-none object-cover bg-black/10 absolute h-full w-full left-0 top-0 right-0 bottom-0 object-center text-[transparent]"
                        src='https://dublinsouthfm.ie/wp-content/webpc-passthru.php?src=https://dublinsouthfm.ie/wp-content/uploads/2021/09/Festival-PA-Caravan-1024x694.png&nocache=1' />
                </div>
                <div className="lg:-mt-24">
                    <section>
                        <div className="ml-auto mr-auto p-4 sm:p-8 bg-white max-w-5xl font-GTWalsheim">
                            <div className="max-w-none text-base">
                                <h1 className="font-GTWalsheim text-5xl mb-6 font-bold underline">Code Of Practice</h1>
                                <div className="text-left">
                                    <p className="mb-4">Under the Broadcasting Act 2009, viewers and listeners to Irish radio and
                                        television services can complain about broadcasting content which they believe
                                        is not in keeping with broadcasting codes and rules. When making a complaint,
                                        the relevant programme or commercial communication should be identified,
                                        including the date of broadcast and time. The complainant should explain what
                                        it is about the broadcast that has led them to make a complaint.</p>
                                    <p className="mb-4"><strong>Dublin South FM</strong> aims to deliver the best possible service to our listeners. We
                                        also aim to ensure that our programming is compliant with the requirements set
                                        out in the Broadcasting Act, 2009 and broadcasting codes published by the
                                        Broadcasting Authority of Ireland.
                                    </p>
                                    <p className="mb-4"> Dublin South FM is obliged under the Broadcasting Act, 2009 to have in place
                                        a Code of Practice for handling complaints from our listeners. This Code of
                                        Practice sets out and explains our complaint process for listeners and ensures
                                        that we deal with complaints in an effective and efficient manner.</p>



                                    <p className="mb-4">
                                        <ol className="list-decimal">
                                            <li>What can I complain about?
                                                <ul className="list-disc my-4">
                                                    <li>Harm, offence, incitement, and authority of State (section 46J)</li>
                                                    <li>News and Current Affairs (section 46L)</li>
                                                    <li>Retention of copies of programme material (section 46P(1) or (2))</li>
                                                    <li>Media service codes and rules</li>
                                                    <li>Privacy (section 46K)</li>
                                                    <li>Advertising (sections 46M(2) or (3), 106(3) and 127(6))</li>
                                                </ul>
                                                <p className="mb-4"> You may submit a complaint to us if you are of the opinion that a broadcast or
                                                    part of a broadcast on our service has breached one or more of the following
                                                    obligations:</p>
                                                <p className="mb-4">

                                                    (i) News: we will ensure that our news programming is objective and impartial
                                                    without any expression of our own views.
                                                </p>
                                                <p className="mb-4">
                                                    (ii) Current affairs: we will ensure that our current affairs programming is: -
                                                    objective and impartial without any expression of our own views; and - will
                                                    treat the subject matter and all interests concerned fairly. If we cannot achieve
                                                    fairness, objectivity and impartiality in one current affairs programme, we will
                                                    do so in related broadcasts that will be broadcast within a reasonable period of
                                                    each other.
                                                </p>


                                                <p className="mb-4">
                                                    (iii) Programmes: we will ensure that our programming does not contain any
                                                    content which may reasonably be regarded as - causing harm or offence; -
                                                    tending to promote, or incite crime; - tending to undermine the authority of the
                                                    State; or - unreasonably encroach upon the privacy of an individual. We also
                                                    will ensure programming is in compliance with the <span className="underline"><a href={COPS} target='_blank'>Coimisiún na Meán Code of
                                                    Programme Standards</a></span> 
                                                </p>
                                                <p className="mb-4">
                                                    (iv) Commercial Communications: All commercial communications broadcast
                                                    by us will be in compliance with the <span className="underline"><a href={GCCC} target='_blank'>Coimisiún na Meán General Commercial Communications Code</a></span> and the <span className="underline"><a href={CCCC} target='_blank'>Coimisiún na Meán Children’s Commercial Communications Code</a></span>
                                                </p>
                                                <p className="mb-4">
                                                    When submitting a complaint under b) harm &amp; offence, complainants can refer
                                                    to the BAI’s “The Code of Programme Standards”. This Code details a range of
                                                    factors that may be taken into account when determining whether programme
                                                    material is harmful or offensive.
                                                </p>

                                                <p className="mb-4">
                                                    A copy of the Code is available to download as a PDF on the BAI’s website or
                                                    on request from their offices.
                                                </p>
                                                <p className="mb-4">
                                                    If your complaint concerns alleged defamation, you should refer to the BAI
                                                    Right of Reply Scheme. The BAI codes can be accessed at www.bai.ie or are
                                                    available on request from the BAI offices.
                                                </p>

                                            </li>
                                            <li>
                                                How do I make a complaint?
                                                <p className="my-4">
                                                    You can first contact us by telephone, email complaints@dublinsouthfm.ie or
                                                    letter and inform us of your complaint. A member of our staff will contact you
                                                    to discuss what concerned you and attempt to resolve the matter to your
                                                    satisfaction. If we cannot resolve your complaint to your satisfaction, and you
                                                    are satisfied that your complaint is covered by this Code of Practice, you should
                                                    submit the following details in writing (letter, fax or email):
                                                </p>
                                                <ul className="list-disc mb-4">
                                                    <li>your name and address;</li>
                                                    <li>the category of complaint; (please refer to the categories of complaints What I can complain about?’ above)</li>
                                                    <li>the date, time and channel of broadcast;</li>
                                                    <li>the name of the programme, news item or advertisement/commercial communication that you have viewed/heard and which is the subject of your complaint;
                                                    </li>
                                                    <li>Privacy (section 46K)</li>
                                                    <li>detail exactly what, in the broadcast, concerned you;</li>
                                                </ul>
                                                <p className="mb-4">
                                                    In order for your complaint to be accepted and considered, it must include the
                                                    above details and must refer to a programme, advertisement or other form of
                                                    commercial communication already broadcast on our service.
                                                </p>
                                                <p className="mb-4">
                                                    If, by reason of disability or other good reason, you are unable to submit the
                                                    complaint in writing, please contact us and we will assist you to do so.
                                                </p>
                                                <p className="mb-4">

                                                </p>
                                                <p className="mb-4">
                                                    Dublin South FM is committed to protecting the rights and privacy of
                                                    individuals in accordance with the Data Protection Acts 1988 - 2003.
                                                </p>
                                                <p className="mb-4">
                                                    We will not accept complaints which we deem to be of a frivolous or vexatious
                                                    nature.
                                                </p>
                                            </li>
                                            <li>How soon should I make my complaint after the broadcast?
                                                <p className="my-4">
                                                    The Broadcasting Act, 2009 requires you to make your complaint not more than
                                                    30 days after the date of broadcast:
                                                </p>
                                                <ul className="list-disc mb-4">
                                                    <li>if your complaint relates to one broadcast, 30 days after the date of that broadcast;</li>
                                                    <li>if your complaint relates to two or more unrelated broadcasts; 30 days
                                                        after the date of the earlier or earliest of those broadcasts;</li>
                                                    <li>if your complaints relates to two or more related broadcasts of which at
                                                        least two are made on different dates; 30 days after the date of the later or
                                                        latest of those broadcasts.</li>
                                                    <li>Complaints submitted outside of these time periods cannot be considered.</li>

                                                </ul>
                                            </li>
                                            <li>Where should I send my complaint?
                                                <p className="my-4">
                                                    You should submit your complaint to the following address:
                                                    Station Manager
                                                    Dublin South FM
                                                    Level 5
                                                    Dundrum Town Centre
                                                    Dublin 16
                                                </p>
                                                <p className="mb-4">Contact Number: 01 296 0939</p>
                                                <p className="mb-4">Email: complaints@dublinsouthfm.ie</p>
                                                <p className="mb-4">
                                                    In order for your complaint to be accepted and considered, it must include the
                                                    above details and must refer to a programme, advertisement or other form of
                                                    commercial communication already broadcast on our service.
                                                </p>
                                                <p className="mb-4">
                                                    To assist complainants a ‘Programming Complaint Form’ is available to
                                                    download from our website HERE.
                                                </p>
                                                <p className="mb-4">

                                                    For complaints relating to commercial or advertising output you should use the
                                                    form HERE
                                                </p>
                                                <p className="mb-4">
                                                    An on-line complaint facility is also available on our website at
                                                    www.dublinsouthfm.ie
                                                </p>
                                            </li>
                                            <li>What will happen to my complaint?
                                                <p className="my-4">
                                                    Once we have accepted your complaint we will work to resolve the issue/s as
                                                    soon as possible.  Your complaint will be carefully considered, investigated if
                                                    necessary, and responded to in writing by our Compliance Officer and/or
                                                    Chairperson.
                                                </p>
                                                <ul className="list-disc">
                                                    <li className="mb-4">
                                                        Dublin South FM will write to you to acknowledge receipt of your
                                                        complaint within 7 working days.
                                                    </li>
                                                    <li className="mb-4">
                                                        Dublin South FM will consider the issues raised in your complaint.
                                                    </li>
                                                    <li className="mb-4">
                                                        Dublin South FM will listen to the programme/broadcast item identified
                                                        in your complaint.
                                                    </li>
                                                    <li className="mb-4">
                                                        Where appropriate, we will consult with any party to which your
                                                        complaint relates, for example, the advertiser, the presenter or programme
                                                        maker, to give that party an opportunity to provide observations and
                                                        comments in relation to the issues raised by you.
                                                    </li>
                                                    <li className="mb-4">
                                                        Dublin South FM will provide a response to your complaint which will,
                                                        as far as possible, address all of the issues/concerns you have raised. We
                                                        will set out the reasons for our decision on your complaint. This response
                                                        will be sent to you within 21 days from receipt of your complaint.
                                                    </li>


                                                </ul>
                                            </li>
                                            <li>What are the potential outcomes for my complaint?
                                                <p className="my-4">
                                                    We may uphold or reject a complaint. Upholding a complaint means that we
                                                    believe that our programming did not comply with our obligations covered by
                                                    this Code of Practice. Rejecting a complaint means we believe that our
                                                    programming was in compliance with our obligations.
                                                </p>
                                                <p className="mb-4">
                                                    If we uphold your complaint, we will seek to resolve it to your satisfaction in an
                                                    agreed manner. The manner of resolution will be decided on a case by case
                                                    basis but may include an apology, correction, clarification and/or the offer of a
                                                    rebuttal.
                                                </p>
                                            </li>
                                            <li>The role of Coimisiún na Meán
                                                <p className="mb-4">
                                                    Complaint referrals: Complaints may be referred to Coimisiún na Meán if the
                                                    complainant is not satisfied with the response provided by the broadcaster or if
                                                    no response is provided within the timeframe of 20 working days as set out in
                                                    the Code of Practice for Complaints Handling.
                                                </p>
                                                <p className="mb-4">
                                                    Complainants then have 14 days to refer their complaint to Coimisiún na Meán.
                                                    Complainants can refer complaints to Coimisiún na Meán using the existing
                                                    online portal at https://bai.service-now.com/complaints or they can
                                                    contact complaints@cnam.ie or (01) 6441 200 or write to: 2-5 Warrington
                                                    Place, Dublin 02 XP29.
                                                </p>

                                            </li>
                                            <li>Record of Complaints
                                                <p className="mb-4">
                                                    We are required under the Broadcasting Act, 2009 to keep a record of all
                                                    complaints submitted in accordance with this Code of Practice for two years.
                                                    We are also obliged to provide these records to the Compliance Committee of
                                                    the BAI if the Committee so directs.
                                                </p>
                                                <p className="mb-4">
                                                    Our records will include copies of your complaint, our response/s and the audio
                                                    copies of the broadcast material.
                                                </p>
                                                <p className="mb-4">
                                                    (1) The name of the complainant will not be published without his/her prior
                                                    consent, for example, where a complaint is upheld. The contact details are for
                                                    use by Dublin South FM only.
                                                </p>
                                                <p className="mb-4">
                                                    (2) Dublin South FM is not obliged to send you a copy of any broadcast. You
                                                    yourself should have heard the broadcast in question.
                                                </p>
                                            </li>
                                        </ol>

                                    </p>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>
            </section>
        </div>
    )

}

export default CodeOfPractice;