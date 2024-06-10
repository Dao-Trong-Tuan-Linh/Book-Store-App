import React, { useEffect,Suspense } from "react";
import {
  ScrollView,
  View,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import CategoryBooks from "../components/CategoryBooks";
import Categories from "../components/Categories";
import HeaderHome from "../components/HeaderHome";
import useGetBooks from "../hooks/useGetBooks";
import LoadingSpinner from "../components/LoadingSpinner";

export interface Book {
  bid:string,
  author:string,
  description:string,
  bookName:string,
  newPrice:string,
  oldPrice:string,
  images:string[],
  genre:string,
  category:string,
  publisher:string

}

export default function Home({ navigation }) {
  const SIZE = 100;
  const images = [
    "https://cdn0.fahasa.com/media/magentothem/banner7/SieeuSale_Week2_T524_Banner_Slide_840x320.jpg",
    "https://cdn0.fahasa.com/media/magentothem/banner7/MCBookT524_bannerSlide_840x320.jpg",
    "https://cdn0.fahasa.com/media/magentothem/banner7/Silver_0524_Ver2_dinhtiSlide_840x320.jpg"
  ];

  const categories = [
    {id:1,name:"Văn học",params:"van_hoc",image:"https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_03462015_104616.jpg"},
    {id:2,name:"Kinh tế",params:"kinh_te",image:"https://kinhtevadubao.vn/stores/news_dataimages/nguyenvt/052022/30/17/2945_minh_hYa.jpg?rt=20220530173026"},
    {id:3,name:"Kỹ năng sống",params:"ky_nang_song",image:"https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/08/Thiet-ke-chua-co-ten-42-2.jpg"},
    {id:4,name:"Sách thiếu nhi",params:"sach_thieu_nhi",image:"https://cdn0.fahasa.com/media/catalog/product/8/9/8936067608298.jpg"}
  ]

  const { result: literatureBooks, loading: loadingLiterature } = useGetBooks('van_hoc', 4);
  const { result: economicBooks, loading: loadingEconomic } = useGetBooks('kinh_te', 4);
  const { result: lifeSkillBooks, loading: loadingLifeSkill } = useGetBooks('ky_nang_song', 4);
  const { result: childrenBooks, loading: loadingChildren } = useGetBooks('sach_thieu_nhi', 4);



  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <HeaderHome navigation={navigation}/>
        <ScrollView>
          <View style={{ marginTop: 20 }}>
            <Categories navigation={navigation} categories={categories}/>
          </View>
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            dotColor={"#13274F"}
            inactiveDotColor="#90A4AE"
            ImageComponentStyle={{ width: "100%" }}
          />
          {loadingLiterature ? (<LoadingSpinner/>) : (<CategoryBooks category="Văn học" navigation={navigation} books={literatureBooks}/>)}
          <Suspense fallback={<LoadingSpinner/>}>
          {loadingEconomic ? (<LoadingSpinner/>) : (<CategoryBooks category="Kinh tế" navigation={navigation} books={economicBooks}/>)}
          </Suspense>
          {loadingLifeSkill ? (<LoadingSpinner/>) : (<CategoryBooks category="Kỹ năng sống" navigation={navigation} books={lifeSkillBooks}/>)}
          <Suspense fallback={<LoadingSpinner/>}>
          {loadingChildren ? (<LoadingSpinner/>) : (<CategoryBooks category="Sách thiếu nhi" navigation={navigation} books={childrenBooks}/>)}
          </Suspense>
          
        </ScrollView>
      </View>
    </>
  );
}
