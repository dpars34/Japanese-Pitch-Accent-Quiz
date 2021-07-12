import React from 'react'

//Styles
import { CardWrapper, Title, LinkText } from '../../App.styles'
import { Text, TextTitle, Hr } from './About.styles'

type Props = {
    reset: () => void;
}

const About: React.FC<Props> = ( {reset} ) => {
    return (
        <CardWrapper margin>
            <Title>About Pitch Accent</Title>
            <TextTitle>What is pitch-accent?</TextTitle>
            <Text>Japanese pitch accent (高低アクセント) is a characteristic of the Japanese language where words can be distinguished by using pitch to emphasise different syllables (or morae to be precise) in a word. To put it simply, by changing only pitch (and keeping all consonant and vowel sounds the same) you can conmpletely change what word you are saying.</Text>
            <Text>Second language learners of Japanese often overlook this characteristic of Japanese, and although it is possible to become conversational without any focus on pitch-accent, your speech will sound very unnatural and “foreign”. The point of the quiz isn’t to help you improve your spoken pitch-accent, but rather to hopefully shed some light on the importance of pitch accent.</Text>
            <Text>NOTE : There are significant differences in pitch accent between regional Japanese dialects. This test focuses in on the standard Tokyo Yamanote dialect.</Text>
            <Hr />
            <TextTitle>Pitch Accent Patterns</TextTitle>
            <TextTitle>頭高 - Atamadaka</TextTitle>
            <Text>Words that follow the “atamadaka” pitch accent pattern start with the first mora pronounced at a high pitch, followed by a drop in pitch at the second mora where the pitch remains low to the end of the word.</Text>
            <TextTitle>中高 - Nakadaka</TextTitle>
            <Text>Words that follow the “Nakadaka” pitch accent pattern start at a low pitch, with a jump in pitch in the middle of the word before returning back to a low pitch before the end of the word.</Text>
            <TextTitle>尾高 - Odaka</TextTitle>
            <Text>Words that follow the “Odaka” pitch accent pattern start at a low pitch for the first mora, followed by a jump up in pitch for the second mora where the pitch remains high until the end of the word. However, any particles such as は or が that are added onto the end of this word will be pronounced at a lower pitch.</Text>
            <TextTitle>平板 - Heiban</TextTitle>
            <Text>Words that follow the “Heiban” pitch accent pattern start at a low pitch for the first mora, followed by a jump up in pitch for the second mora where the pitch remains high until the end of the word. This is very similar to the “Odaka” pattern, however, any particles such as は or が that are added onto the end of this word will be also pronounced at a high pitch.</Text>
            <Text></Text>
            <LinkText onClick={reset}>Back to start screen</LinkText>
        </CardWrapper>
    )
}

export default About