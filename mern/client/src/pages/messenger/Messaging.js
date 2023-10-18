import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Messaging.module.css";
import Navbar from "../../components/Navbar";

const Messaging = () => {

    return (
        <>
    <Navbar />
    <div className={styles.messaging}>

      <div className={styles.frame3}>
        <div className={styles.mainChatBox}>
          <img
            className={styles.mainChatBoxChild}
            alt=""
            src="/rectangle-6.svg"
          />
          <div className={styles.input}>
            <img className={styles.inputChild} alt="" src="/group-2213.svg" />
            <div className={styles.typeYourMessageHereParent}>
              <div className={styles.typeYourMessage}>
                Type your message here...
              </div>
              <img
                className={styles.fluentcamera24RegularIcon}
                alt=""
                src="/fluentcamera24regular.svg"
              />
              <img
                className={styles.fluentemojiLaugh16RegularIcon}
                alt=""
                src="/fluentemojilaugh16regular.svg"
              />
              <img
                className={styles.antDesignpaperClipOutlinedIcon}
                alt=""
                src="/antdesignpaperclipoutlined.svg"
              />
            </div>
          </div>
          <div className={styles.mainChatBoxItem} />
          <div className={styles.talkingTo}>
            <div className={styles.talkingToChild} />
            <div className={styles.talkingToItem} />
            <div className={styles.talkingToInner} />
            <div className={styles.heyThere}>Hey There!</div>
            <div className={styles.howAreYou}>How are you?</div>
            <div className={styles.iAmDoing}>
              I am doing well, Can we meet tomorrow?
            </div>
            <div className={styles.ellipseDiv} />
            <div className={styles.talkingToChild1} />
            <div className={styles.talkingToChild2} />
            <div className={styles.today830pm}>Today, 8.30pm</div>
            <div className={styles.today836pm}>Today, 8.36pm</div>
          </div>
          <div className={styles.ourMsgs}>
            <div className={styles.ourMsgsChild} />
            <div className={styles.ourMsgsItem} />
            <div className={styles.ourMsgsInner} />
            <div className={styles.hello}>Hello!</div>
            <div className={styles.iAmFine}>I am fine and how are you?</div>
            <div className={styles.yesSure}>Yes Sure!</div>
            <div className={styles.ourMsgsChild1} />
            <div className={styles.ourMsgsChild2} />
            <div className={styles.ourMsgsChild3} />
            <div className={styles.today833pm}>Today, 8.33pm</div>
            <div className={styles.today834pm}>Today, 8.34pm</div>
            <div className={styles.today858pm}>Today, 8.58pm</div>
          </div>
          <div className={styles.ourAvatar}>
            <img
              className={styles.ourAvatarChild}
              alt=""
              src="/ellipse-11@2x.png"
            />
            <div className={styles.onlineLast}>Online - Last seen, 2.02pm</div>
            <div className={styles.anil}>Anil</div>
          </div>
        </div>
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <div className={styles.people}>
              <b className={styles.people1}>People</b>
              <div className={styles.peopleChild} />
              <div className={styles.peopleItem} />
              <div className={styles.peopleInner} />
              <div className={styles.lineDiv} />
              <img className={styles.lineIcon} alt="" src="/line-14.svg" />
              <div className={styles.chatbox1}>
                <img
                  className={styles.chatbox1Child}
                  alt=""
                  src="/ellipse-12@2x.png"
                />
                <div className={styles.frame6}>
                  <div className={styles.anil1}>Anil</div>
                  <div className={styles.aprilFoolsDay}>April fool’s day</div>
                </div>
                <div className={styles.frame7}>
                  <div className={styles.today952pm}>Today, 9.52pm</div>
                  <img
                    className={styles.charmtickDoubleIcon}
                    alt=""
                    src="/charmtickdouble.svg"
                  />
                </div>
              </div>
              <div className={styles.chatbox5}>
                <img
                  className={styles.chatbox1Child}
                  alt=""
                  src="/ellipse-12@2x.png"
                />
                <div className={styles.frame8}>
                  <div className={styles.aprilFoolsDay1}>April fool’s day</div>
                  <div className={styles.victoriaH}>Victoria H</div>
                </div>
                <div className={styles.frame9}>
                  <div className={styles.today952pm}>Today, 9.52pm</div>
                  <img
                    className={styles.charmtickDoubleIcon}
                    alt=""
                    src="/charmtickdouble.svg"
                  />
                </div>
              </div>
              <div className={styles.chatbox2}>
                <img
                  className={styles.chatbox2Child}
                  alt=""
                  src="/ellipse-18@2x.png"
                />
                <div className={styles.frame10}>
                  <div className={styles.baag}>Baag</div>
                  <div className={styles.chuuthiya}>Chuuthiya</div>
                </div>
                <div className={styles.frame11}>
                  <img
                    className={styles.phnumberCircleOneFillIcon}
                    alt=""
                    src="/phnumbercircleonefill.svg"
                  />
                  <div className={styles.today1211pm}>Today, 12.11pm</div>
                </div>
              </div>
              <div className={styles.chatbox3}>
                <img
                  className={styles.chatbox3Child}
                  alt=""
                  src="/ellipse-18@2x.png"
                />
                <div className={styles.frame12}>
                  <div className={styles.baag1}>Baag</div>
                  <div className={styles.maryMaam}>Mary ma’am</div>
                </div>
                <div className={styles.frame13}>
                  <img
                    className={styles.phnumberCircleOneFillIcon}
                    alt=""
                    src="/phnumbercircleonefill.svg"
                  />
                  <div className={styles.today1211pm}>Today, 12.11pm</div>
                </div>
              </div>
              <div className={styles.chatbox4}>
                <img
                  className={styles.phnumberCircleOneFillIcon2}
                  alt=""
                  src="/phnumbercircleonefill.svg"
                />
                <div className={styles.today1211pm2}>Today, 12.11pm</div>
                <div className={styles.baag2}>Baag</div>
                <img
                  className={styles.chatbox3Child}
                  alt=""
                  src="/ellipse-18@2x.png"
                />
                <div className={styles.maryMaam1}>Mary ma’am</div>
              </div>
            </div>
            <div className={styles.frame14}>
              <div className={styles.searchbar}>
                <img
                  className={styles.bxsearchIcon}
                  alt=""
                  src="/bxsearch.svg"
                />
                <div className={styles.search}>Search</div>
              </div>
              <div className={styles.framechats}>
                <div className={styles.framechatsChild} />
                <b className={styles.groups}>Groups</b>
                <div className={styles.hiking}>
                  <img
                    className={styles.hikingChild}
                    alt=""
                    src="/ellipse-17@2x.png"
                  />
                  <div className={styles.frame15}>
                    <div className={styles.itsNotGoing}>
                      It’s not going to happen
                    </div>
                    <div className={styles.hiking1}>Hiking</div>
                  </div>
                  <div className={styles.frame16}>
                    <div className={styles.wednesday912am}>
                      Wednesday, 9.12am
                    </div>
                    <img
                      className={styles.phnumberCircleOneFillIcon3}
                      alt=""
                      src="/phnumbercircleonefill.svg"
                    />
                  </div>
                </div>
                <div className={styles.hiking2}>
                  <img
                    className={styles.hikingChild}
                    alt=""
                    src="/ellipse-17@2x.png"
                  />
                  <div className={styles.frame15}>
                    <div className={styles.itsNotGoing}>
                      It’s not going to happen
                    </div>
                    <div className={styles.hiking1}>Hiking</div>
                  </div>
                  <div className={styles.frame16}>
                    <div className={styles.wednesday912am}>
                      Wednesday, 9.12am
                    </div>
                    <img
                      className={styles.phnumberCircleOneFillIcon3}
                      alt=""
                      src="/phnumbercircleonefill.svg"
                    />
                  </div>
                </div>
                <div className={styles.hiking4}>
                  <img
                    className={styles.hikingChild}
                    alt=""
                    src="/ellipse-17@2x.png"
                  />
                  <div className={styles.frame15}>
                    <div className={styles.itsNotGoing}>
                      It’s not going to happen
                    </div>
                    <div className={styles.hiking1}>Hiking</div>
                  </div>
                  <div className={styles.frame16}>
                    <div className={styles.wednesday912am}>
                      Wednesday, 9.12am
                    </div>
                    <img
                      className={styles.phnumberCircleOneFillIcon3}
                      alt=""
                      src="/phnumbercircleonefill.svg"
                    />
                  </div>
                </div>
                <div className={styles.framechatsItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Messaging;
