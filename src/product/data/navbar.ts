
interface INavbarModel{
    id: number
    title: string
    route: string
    isActive: boolean
}

interface NavbarModelItems extends Array<INavbarModel>{}

export const NavbarModels: NavbarModelItems = [
    {id:0,title:"Home",route:"",isActive: true},
    {id:1,title:"About", route:"about",isActive: false},
    {id:2,title:"Docs",route:"docs",isActive: false},
    {id:3,title:"Pricing",route:"pricing",isActive: false},
    {id:4,title:"Contact",route:"contact",isActive: false}
]