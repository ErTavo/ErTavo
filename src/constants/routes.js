import FilesIcon from "@/svg/Filesicon";
import AccountIcon from "@/svg/Accounticon";
import CodeIcon from "@/svg/Codeicon";
import SettingsIcon from "@/svg/Settingsicon";
import GithubIcon from "@/svg/Githubicon";
import MailIcon from "@/svg/Messageicon";

const ROUTES = [
  {
    path: '/',
    name: 'home',
    ext: 'js',
    Icon: FilesIcon,
  },
  {
    path: '/about',
    name: 'about',
    ext: 'html',
    Icon: AccountIcon,
  },
  {
    path: '/experience',
    name: 'experience',
    ext: 'json',
    Icon: GithubIcon,
  },
  {
    path: '/projects',
    name: 'projects',
    ext: 'yml',
    Icon: CodeIcon,
  },
  {
    path: '/settings',
    name: 'settings',
    ext: 'css',
    Icon: SettingsIcon,
  },
  {
    path: '/contact',
    name: 'contact',
    ext: 'md',
    Icon: MailIcon,
  },
]

module.exports = {
  ROUTES,
}