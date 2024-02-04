import { AiFillQuestionCircle, AiFillHome, AiFillAccountBook } from "react-icons/ai"
import { RiCopperCoinFill, RiShareForward2Line } from "react-icons/ri";
import { MdFlagCircle, MdEmojiEvents } from "react-icons/md";
import { GiJourney } from "react-icons/gi";

export const sidebarLinks = [
    {
        name: "Dashboard",
        icon: <AiFillHome size="20px"/>

    },
    {
        name: "Reward Coins",
        icon: <RiCopperCoinFill size="20px"/>


    },
    {
        name: "Referrals",
        icon: <RiShareForward2Line size="20px"/>

    },
    {
        name: "streeks",
        icon: <GiJourney size="20px"/>


    },
    {
        name: "Contests",
        icon: <MdFlagCircle size="20px"/>


    },
    {
        name: "Events",
        icon: <MdEmojiEvents size="20px"/>


    },


]