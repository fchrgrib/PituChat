import photo1 from "../../storage/img/profile-1.jpg";
import photo2 from "../../storage/img/profile-2.png";
import photo3 from "../../storage/img/profile-3.jpg";
import {getRandomIntInRange} from "../../utils/utils";

export interface ChatPreview {
    name: string;
    lastMessage: string;
    storeName: string;
    path: string;
    unread: number;
    selected: boolean;
    time:string;
}

export interface ChatMessage {
    name?: string;
    message: string;
    self: boolean;
    time:string;
}

export const chatPreviewSeed:ChatPreview[] = [
    {
        name: "Lorem Ipsum",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        storeName: "Lorem Beauty",
        path: photo1,
        unread: getRandomIntInRange(0, 20),
        selected: false,
        time:"Today"
    },
    {
        name: "Lorem Ipsum",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        storeName: "Lorem Beauty",
        path: photo2,
        unread: getRandomIntInRange(0, 20),
        selected: false,
        time:"Today"
    },
    {
        name: "Lorem Ipsum",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        storeName: "Lorem Beauty",
        path: photo3,
        unread: getRandomIntInRange(0, 20),
        selected: false,
        time:"Today"
    },
    {
        name: "Lorem Ipsum",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        storeName: "Lorem Beauty",
        path: photo1,
        unread: getRandomIntInRange(0, 20),
        selected: false,
        time:"Today"
    },
    {
        name: "Lorem Ipsum",
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        storeName: "Lorem Beauty",
        path: photo1,
        unread: getRandomIntInRange(0, 20),
        selected: false,
        time:"Today"
    }
]

export const chatMessagesSeed:ChatMessage[] = [
    {
        name: "Lorem Ipsum",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        self: false,
        time:"Today"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        self: true,
        time:"Today"
    },
    {
        name: "Lorem Ipsum",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        self: false,
        time:"Today"
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        self: true,
        time:"Today"
    },

]