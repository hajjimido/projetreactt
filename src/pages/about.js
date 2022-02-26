import { Component } from "react";
import SimpleReactFooter from "simple-react-footer";

class about extends Component{
render() {
  const description = "If you want to revert the last commit just do git revert <unwanted commit hash> ; then you can push this new commit, which undid your previous commit.";
  const title = "EnsaFood";
  const columns = [
    {
        
        resources: [
            {
              name: "Resources",
              link: "/about"
            },
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/about"
            },
            {
                name: "Contact",
                link: "/about"
            },
            {
                name: "Admin",
                link: "about"
            }
        ]
    },
    {
       
        resources: [
            {
              name: "Legal",
              link: "/about"

            },
            {
                name: "Privacy",
                link: "/about"
            },
            {
                name: "Terms",
                link: "/about"
            }
        ]
    },
    {
        
        resources: [
             {
              name: "Visit",
              link: "/about"

             },
            {
                name: "Locations",
                link: "/about"
            },
            {
                name: "Culture",
                link: "/about"
            }
        ]
    }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="white"
    iconColor="white"
    backgroundColor="black"
    fontColor="white"
    copyrightColor="darkgrey"
 />;
};
}
export default about;