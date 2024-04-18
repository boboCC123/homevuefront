import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import User2 from '@/components/User2'
import User3 from '@/components/User3'
import Login from "@/components/Login";
import Index from "@/components/Index";
import Err from "@/components/Err";
import Version from "@/components/Version";
import Novel from "@/components/Novel";
import Video from "@/components/Video";
import Comic from "@/components/Comic";
import SaveUser from "@/components/SaveUser";
import SU from "@/components/SU";
import SaveSuccess from "@/components/SaveSuccess";
import AddSuccess from "@/components/AddSuccess";
import AddFail from "@/components/AddFail";
import AddComic from "@/components/AddComic";
import Carousel from "@/components/Carousel";
import DownloadFile from "@/components/DownloadFile";

Vue.use(Router)

export default new Router({
  mode:'history', //设置url
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/User2',
      name: 'User2',
      component: User2
    },
    {
      path: '/User3',
      name: 'User3',
      component: User3
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Comic',
      name: 'Comic',
      component: Comic
    },
    {
      path: '/Err',
      name: 'Err',
      component: Err
    },
    {
      path: '/Version',
      name: 'Version',
      component: Version
    },
    {
      path: '/Novel',
      name: 'Novel',
      component: Novel
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/SaveUser',
      name: 'SaveUser',
      component: SaveUser
    },
    {
      path: '/SU',
      name: 'SU',
      component: SU
    },
    {
      path: '/SaveSuccess',
      name: 'SaveSuccess',
      component: SaveSuccess
    },
    {
      path: '/AddSuccess',
      name: 'AddSuccess',
      component: AddSuccess
    },
    {
      path: '/AddFail',
      name: 'AddFail',
      component: AddFail
    },
    {
      path: '/Comic/AddComic',
      name: 'AddComic',
      component: AddComic
    },
    ,
    {
      path: '/Comic/Carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/Comic/DownloadFile',
      name: 'DownloadFile',
      component: DownloadFile
    }

  ]
})


