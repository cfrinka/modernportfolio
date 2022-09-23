import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json();
    const pageInfo: PageInfo = await data.pageInfo;

    return pageInfo;

}