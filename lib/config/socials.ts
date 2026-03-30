import { FaGithub, FaLinkedin, FaInstagram, FaSpotify, FaCube } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
import { SiCodeforces, SiChessdotcom } from "react-icons/si";

export const socialConfig = {
  links: [
    // { label: "Email", href: "mailto:anand.clef@gmail.com", icon: MdEmail, showOnProfile: false },
    { label: "LinkedIn", href: "https://linkedin.com/in/anandin", icon: FaLinkedin, showOnProfile: true },
    { label: "GitHub", href: "https://github.com/Jupiter-is-BIG", icon: FaGithub, showOnProfile: true },
    { label: "Codeforces", href: "https://codeforces.com/profile/i24", icon: SiCodeforces, showOnProfile: false },
    { label: "AoPS", href: "https://artofproblemsolving.com/community/user/Jupiter_is_BIG", icon: FaCube, showOnProfile: false },
    { label: "Instagram", href: "https://www.instagram.com/clef.anand", icon: FaInstagram, showOnProfile: false },
    { label: "Spotify", href: "https://open.spotify.com/user/hylman697prdf0lzj8313akws", icon: FaSpotify, showOnProfile: false },
    { label: "Chess.com", href: "https://chess.com/member/wuushang", icon: SiChessdotcom, showOnProfile: false },
  ],
};
