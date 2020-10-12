import wisdom from '../assets/wisdom.mp3'
import wisdom2 from '../assets/wisdom2.wav'

type Cluster = {
    id: number,
    cluster: string,
    audio:string,
    selected:boolean
}

const Clusters:Cluster[] = [
    {
        id: 1,
        cluster: 'ch',
        audio: wisdom,
        selected: true
    },

    {
        id: 2,
        cluster: 'th',
        audio: wisdom2,
        selected: true
    },
    {
        id: 3,
        cluster: 'pain',
        audio: '',
        selected: true,

    },

]

export default Clusters;