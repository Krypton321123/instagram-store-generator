import AppbarForMain from "@/components/AppbarForMain";

export default function({ children }: {children: React.ReactNode}) {

    return <>
    <AppbarForMain />
    {children}
    </>
}