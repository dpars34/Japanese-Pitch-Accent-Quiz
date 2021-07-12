import nihon_hira from './Images/pitch-accent-diagrams/nihon_hira.png'
import hontou_hira from './Images/pitch-accent-diagrams/hontou_hira.png'
import ishi_hira from './Images/pitch-accent-diagrams/ishi_hira.png'
import ame_hira from './Images/pitch-accent-diagrams/ame_hira.png'
import toshi_hira from './Images/pitch-accent-diagrams/toshi_hira.png'
import haru_hira from './Images/pitch-accent-diagrams/haru_hira.png'
import shiro_hira from './Images/pitch-accent-diagrams/shiro_hira.png'
import ichi_hira from './Images/pitch-accent-diagrams/ichi_hira.png'
import michi_hira from './Images/pitch-accent-diagrams/michi_hira.png'
import kinou_hira from './Images/pitch-accent-diagrams/kinou_hira.png'



const questionsData = [
    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["日本 - にほん - Japan", "二本 - にほん - Two (of something long and cylidrical)"],
        correctAnswer: "日本 - にほん - Japan",
        explaination: "The word being said is “日本 - にほん - Japan”. This word follows the “nakadaka” pitch accent pattern.",
        image: nihon_hira,
        questionNumber: 1
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["本当 - ほんとう - Really, truth", "本島 - ほんとう -  Main island"],
        correctAnswer: "本島 - ほんとう -  Main island",
        explaination: "The word being said is “本島 - ほんとう -  Main island”. This word follows the “atamadaka” pitch accent pattern.",
        image: hontou_hira,
        questionNumber: 2
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["石 - いし - Stone", "医師 - いし - Doctor"],
        correctAnswer: "石 - いし - Stone",
        explaination: "The word being said is “石 - いし - Stone. This word follows the “odaka” pitch accent pattern.",
        image: ishi_hira,
        questionNumber: 3 
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["雨 - あめ - Rain", "飴 - あめ - Hard candy"],
        correctAnswer: "飴 - あめ - Hard candy",
        explaination: "The word being said is “飴 - あめ - Hard candy”. This word follows the “heiban” pitch accent pattern.",
        image: ame_hira,
        questionNumber: 4
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["年 - とし - Year, age", "都市 - とし - City"],
        correctAnswer: "年 - とし - Year, age",
        explaination: "The word being said is “年 - とし - Year, age”. This word follows the “odaka” pitch accent pattern.",
        image: toshi_hira,
        questionNumber: 5
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["春 - はる - Spring", "貼る - はる - To stick"],
        correctAnswer: "春 - はる - Spring",
        explaination: "The word being said is “春 - はる - Spring”. This word follows the “atamadaka” pitch accent pattern.",
        image: haru_hira,
        questionNumber: 6
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["白 - しろ - White", "城 - しろ -  Castle"],
        correctAnswer: "城 - しろ -  Castle",
        explaination: "The word being said is “城 - しろ -  Castle”. This word follows the “heiban” pitch accent pattern.",
        image: shiro_hira,
        questionNumber: 7
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["一 - いち - One", "位置 - いち - Position, location"],
        correctAnswer: "位置 - いち - Position, location",
        explaination: "The word being said is “位置 - いち - Position, location”. This word follows the “atamadaka” pitch accent pattern.",
        image: ichi_hira,
        questionNumber: 8 
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["道 - みち - Road, path", "未知 - みち - Unknown"],
        correctAnswer: "道 - みち - Road, path",
        explaination: "The word being said is “道 - みち - Road, path”. This word follows the “heiban” pitch accent pattern.",
        image: michi_hira,
        questionNumber: 9
    },

    {
        question: "What word is being said in this clip?",
        media: '',
        answers: ["機能 - きのう - Function", "昨日が - きのう - Yesterday]"],
        correctAnswer: "昨日 - きのう - Yesterday",
        explaination: "The word being said is “昨日 - きのう - Yesterday”. This word follows the “nakadaka” pitch accent pattern.",
        image: kinou_hira,
        questionNumber: 10
    }
]

export default questionsData