import { Experiences } from "../typings";

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experiences[] = await data.experiences;

    return experiences;

}