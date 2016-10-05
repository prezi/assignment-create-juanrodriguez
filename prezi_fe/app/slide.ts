export class Creator {
    name: string;
    profileUrl: string;
}

export class Slide {
    id: string;
    title: string;
    thumbnail: string;
    creator: Creator;
    createdAt: string;
}
