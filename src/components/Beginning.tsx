import wisdom from '../assets/wisdom.mp3'
import wisdom2 from '../assets/wisdom2.wav'

type Cluster = {
    id: number,
    cluster: string,
    audio:string,
    selected:boolean
}

const Beginning:Cluster[] = [
    {
        id: 1,
        cluster: 'bl',
        audio: wisdom,
        selected: true
    },

    {
        id: 2,
        cluster: 'br',
        audio: wisdom2,
        selected: true
    },
    {
        id: 3,
        cluster: 'cl',
        audio: '',
        selected: true,
    },
    {
        id: 4,
        cluster: 'cr',
        audio: '',
        selected: true,
    },
    {
        id: 5,
        cluster: 'dr',
        audio: '',
        selected: true,
    },
    {
        id: 6,
        cluster: 'fr',
        audio: '',
        selected: true,
    },
    {
        id: 7,
        cluster: 'tr',
        audio: '',
        selected: true,
    },
    {
        id: 8,
        cluster: 'fl',
        audio: '',
        selected: true,
    },
    {
        id: 9,
        cluster: 'gl',
        audio: '',
        selected: true,
    },
    {
        id: 10,
        cluster: 'gr',
        audio: '',
        selected: true,
    },
    {
        id: 11,
        cluster: 'pl',
        audio: '',
        selected: true,
    },
    {
        id: 12,
        cluster: 'pr',
        audio: '',
        selected: true,
    },
    {
        id: 13,
        cluster: 'sl',
        audio: '',
        selected: true,
    },
    {
        id: 14,
        cluster: 'sm',
        audio: '',
        selected: true,
    },
    {
        id: 15,
        cluster: 'sp',
        audio: '',
        selected: true,
    },
    {
        id: 16,
        cluster: 'st',
        audio: '',
        selected: true,
    },

]

export default Beginning;