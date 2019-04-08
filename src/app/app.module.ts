import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './page/element/header/header.component';
import { FooterComponent } from './page/element/footer/footer.component';
import { HeroComponent } from './page/element/hero/hero.component';
import { Intro5050Component } from './page/element/intro5050/intro5050.component';
import { ContentComponent } from './content/content.component';
import { ContentsComponent } from './contents/contents.component';
import { ContentDirective } from './content.directive';
import { NewsComponent } from './content/categoryTemplate/news/news.component';
import { News34Event14Component } from './page/element/news34event14/news34event14.component';
import { Text50sixup50Component } from './page/element/text50sixup50/text50sixup50.component';
import { Comm50update50Component } from './page/element/comm50update50/comm50update50.component';
import { AboutComponent } from './page/about/about.component';
import { ThirdsBannerComponent } from './page/element/thirds-banner/thirds-banner.component';
import { PublicationsComponent } from './page/element/publications/publications.component';
import { ChangingLandscapesComponent } from './page/changing-landscapes/changing-landscapes.component';
import { PromotingSeafoodComponent } from './page/promoting-seafood/promoting-seafood.component';
import { ResponsibleSourcingComponent } from './page/responsible-sourcing/responsible-sourcing.component';
import { SafetyTrainingComponent } from './page/safety-training/safety-training.component';
import { InsightResearchComponent } from './page/insight-research/insight-research.component';
import { Banner5050Component } from './page/element/banner5050/banner5050.component';
import { Awards50Facts50Component } from './page/element/awards50facts50/awards50facts50.component';
import { SidemenuComponent } from './page/element/sidemenu/sidemenu.component';
import { Twoup50Component } from './page/element/twoup50/twoup50.component';
import { Discuss50Aqua50Component } from './page/element/discuss50aqua50/discuss50aqua50.component';
import { LinkDropdownComponent } from './page/element/link-dropdown/link-dropdown.component';
import { ContentTogglesComponent } from './page/element/content-toggles/content-toggles.component';
import { PublicationsFooterComponent } from './page/element/publications-footer/publications-footer.component';
import { FeaturedItemsComponent } from './page/element/featured-items/featured-items.component';
import { VideoBannerComponent } from './page/element/video-banner/video-banner.component';
import { Facts50careers50Component } from './page/element/facts50careers50/facts50careers50.component';
import { Comm50free50Component } from './page/element/comm50free50/comm50free50.component';
import { Threeup50Component } from './page/element/threeup50/threeup50.component';
import { ButtonBoxComponent } from './page/element/button-box/button-box.component';
import { Sidemenu50content50Component } from './page/element/sidemenu50content50/sidemenu50content50.component';
import { Vertical50Link50Component } from './page/element/vertical50link50/vertical50link50.component';
import { VerticalTextImageComponent } from './page/element/vertical-text-image/vertical-text-image.component';
import { Sidemenu50Dropdownlink50Component } from './page/element/sidemenu50-dropdownlink50/sidemenu50-dropdownlink50.component';
import { NewsEventsComponent } from './page/news-events/news-events.component';
import { PublicationsPageComponent } from './publications/publications.component';
import { NewslettersComponent } from './page/newsletters/newsletters.component';
import { NewsHeaderComponent } from './page/element/news-header/news-header.component';
import { ThirdsBanner2Component } from './page/element/thirds-banner2/thirds-banner2.component';
import { LatestEventsComponent } from './page/element/latest-events/latest-events.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Banner50502Component } from './page/element/banner50502/banner50502.component';
import { BlogComponent } from './content/categoryTemplate/blog/blog.component';
import { NewsSummaryComponent } from './page/element/news-summary/news-summary.component';
import { RfsHomeComponent } from './rfs/rfs-home/rfs-home.component';
import { RfsQuicksearchComponent } from './rfs/element/rfs-quicksearch/rfs-quicksearch.component';
import { RfsSearchResultsComponent } from './rfs/rfs-search-results/rfs-search-results.component';
import { RfsProfileComponent } from './rfs/rfs-profile/rfs-profile.component';
import { SecondaryNavComponent } from './page/secondary-nav/secondary-nav.component';
import { RfsSidemenu50latestNews50Component } from './rfs/element/rfs-sidemenu50latest-news50/rfs-sidemenu50latest-news50.component';
import { SingleCatNewsComponent } from './page/element/single-cat-news/single-cat-news.component';
import { Banner5050FourUpComponent } from './page/element/banner5050-four-up/banner5050-four-up.component';
import { Banner5050FiveUpComponent } from './page/element/banner5050-five-up/banner5050-five-up.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VideoBannerTwoUpComponent } from './page/element/video-banner-two-up/video-banner-two-up.component';
import { RfsFullSearchComponent } from './rfs/element/rfs-full-search/rfs-full-search.component';
import { DefaultComponent } from './content/categoryTemplate/default/default.component';
import { TendersComponent } from './page/element/tenders/tenders.component';
import { AnnualReportsComponent } from './page/element/annual-reports/annual-reports.component';
import { ContactComponent } from './page/about/contact/contact.component';
import { VacanciesComponent } from './page/about/vacancies/vacancies.component';
import { MediaRoomComponent } from './page/media-room/media-room.component';
import { RegulationComponent } from './page/regulation/regulation.component';
import { ACHomeComponent } from './aquaculture/home/home.component';
import { ACToolComponent } from './aquaculture/tool/tool.component';
import { ACProfileComponent } from './aquaculture/profile/profile.component';
import { ACPreviewComponent } from './aquaculture/preview/preview.component';
import { LinkListComponent } from './page/element/link-list/link-list.component';
import { ArticleByIdComponent } from './content/article-by-id/article-by-id.component';
import { TrainingOnshoreComponent } from './page/training-onshore/training-onshore.component';
import { LinkDropdownLeftComponent } from './page/element/link-dropdown-left/link-dropdown-left.component';
import { TwoPeopleComponent } from './page/element/two-people/two-people.component';
import { ButtonComponent } from './page/element/button/button.component';
import { NewsSingleComponent } from './page/element/news-single/news-single.component';
import { NewsletterComponent } from './page/newsletter/newsletter.component';
import { FishChipAwardsComponent } from './page/fish-chip-awards/fish-chip-awards.component';
import { InitiativesComponent } from './page/element/initiatives/initiatives.component';
import { TempFooterComponent } from './page/element/temp-footer/temp-footer.component';
import { TessHomeComponent } from './tess/tess-home/tess-home.component';
import { TessProfileComponent } from './tess/tess-profile/tess-profile.component';
import { TessSearchResultsComponent } from './tess/tess-search-results/tess-search-results.component';
import { TessSearchComponent } from './tess/tess-search/tess-search.component';
import { GearHomeComponent } from './gear/gear-home/gear-home.component';
import { GearSearchComponent } from './gear/gear-search/gear-search.component';
import { GearSearchResultsComponent } from './gear/gear-search-results/gear-search-results.component';
import { GearProfileComponent } from './gear/gear-profile/gear-profile.component';
import { EffectScoreComponent } from './gear/effect-score/effect-score.component';
import { RassHomeComponent } from './rass/rass-home/rass-home.component';
import { RassSearchComponent } from './rass/rass-search/rass-search.component';
import { RassSearchResultsComponent } from './rass/rass-search-results/rass-search-results.component';
import { RassProfileComponent } from './rass/rass-profile/rass-profile.component';
import { RiskMeterComponent } from './rass/risk-meter/risk-meter.component';
import { MomentModule } from 'ngx-moment';
import { MiPublicHomeComponent } from './market-insights/mi-public-home/mi-public-home.component';
import { MiSecureHomeComponent } from './market-insights/mi-secure-home/mi-secure-home.component';
import { MiVerifyComponent } from './market-insights/mi-verify/mi-verify.component';
import { MiFileComponent } from './market-insights/mi-file/mi-file.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

const routerOptions: ExtraOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'media-room', component: MediaRoomComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/contact', component: ContactComponent },
    { path: 'about/vacancies', component: VacanciesComponent },
    { path: 'regulation', component: RegulationComponent },
    { path: 'newsletter', component: NewsletterComponent },
    
    { path: 'rfs', component: RfsHomeComponent },
    { path: 'rfs/full-search', component: RfsSearchResultsComponent },
    { path: 'rfs/full-search/:alpha', component: RfsSearchResultsComponent },
    { path: 'rfs/profile/:id', component: RfsProfileComponent },

    { path: 'mi/verify/:code', component: MiVerifyComponent },
    { path: 'market-insights/browse', component: MiSecureHomeComponent },
    { path: 'market-insights', component: MiPublicHomeComponent },

    { path: 'tess', component: TessHomeComponent },
    { path: 'tess/full-search', component: TessSearchResultsComponent },
    { path: 'tess/profile/:id', component: TessProfileComponent },

    { path: 'gear', component: GearHomeComponent },
    { path: 'gear/full-search', component: GearSearchResultsComponent },
    { path: 'gear/:type/profile/:id', component: GearProfileComponent },

    { path: 'rass', component: RassHomeComponent },
    { path: 'rass/full-search', component: RassSearchResultsComponent },
    { path: 'rass/profile/:id', component: RassProfileComponent },    
    
    { path: 'aquaculture', component: ACHomeComponent },
    { path: 'aquaculture/profile/:id', component: ACProfileComponent },
    { path: 'aquaculture/tool', component: ACToolComponent },

    { path: 'publications', component: PublicationsPageComponent },

    { path: 'fish-chip-awards', component: FishChipAwardsComponent },
    { path: 'news-events', component: NewsEventsComponent },
    { path: 'changing-landscapes', component: ChangingLandscapesComponent },
    { path: 'promoting-seafood', component: PromotingSeafoodComponent },
    { path: 'responsible-sourcing', component: ResponsibleSourcingComponent },
    { path: 'safety-training', component: SafetyTrainingComponent },
    { path: 'insight-research', component: InsightResearchComponent },
    { path: 'article/:slug', component: ContentComponent },
    { path: 'articles/:slug', component: ContentsComponent },
    { path: 'newsletters', component: NewslettersComponent },
    { path: 'articlebyid/:id', component: ArticleByIdComponent },
    { path: 'training-onshore', component: TrainingOnshoreComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    Intro5050Component,
    ContentComponent,
    ContentsComponent,
    ContentDirective,
    NewsComponent,
    News34Event14Component,
    Text50sixup50Component,
    Comm50update50Component,
    AboutComponent,
    ThirdsBannerComponent,
    PublicationsComponent,
    ChangingLandscapesComponent,
    PromotingSeafoodComponent,
    ResponsibleSourcingComponent,
    SafetyTrainingComponent,
    InsightResearchComponent,
    Banner5050Component,
    Awards50Facts50Component,
    SidemenuComponent,
    Twoup50Component,
    Discuss50Aqua50Component,
    LinkDropdownComponent,
    ContentTogglesComponent,
    PublicationsFooterComponent,
    FeaturedItemsComponent,
    VideoBannerComponent,
    Facts50careers50Component,
    Comm50free50Component,
    Threeup50Component,
    ButtonBoxComponent,
    Sidemenu50content50Component,
    Vertical50Link50Component,
    VerticalTextImageComponent,
    Sidemenu50Dropdownlink50Component,
    NewsEventsComponent,
    PublicationsPageComponent,
    NewslettersComponent,
    NewsHeaderComponent,
    ThirdsBanner2Component,
    LatestEventsComponent,
    Banner50502Component,
    BlogComponent,
    NewsSummaryComponent,
    RfsHomeComponent,
    RfsQuicksearchComponent,
    RfsSearchResultsComponent,
    RfsProfileComponent,
    SecondaryNavComponent,
    RfsSidemenu50latestNews50Component,
    SingleCatNewsComponent,
    Banner5050FourUpComponent,
    Banner5050FiveUpComponent,
    VideoBannerTwoUpComponent,
    RfsFullSearchComponent,
    DefaultComponent,
    TendersComponent,
    AnnualReportsComponent,
    ContactComponent,
    VacanciesComponent,
    MediaRoomComponent,
    RegulationComponent,
    ACProfileComponent,
    ACHomeComponent,
    ACToolComponent,
    ACPreviewComponent,
    LinkListComponent,
    ArticleByIdComponent,
    NewsSingleComponent,
    TrainingOnshoreComponent,
    LinkDropdownLeftComponent,
    TwoPeopleComponent,
    ButtonComponent,
    NewsletterComponent,
    FishChipAwardsComponent,
    InitiativesComponent,
    TempFooterComponent,
    TessHomeComponent,
    TessProfileComponent,
    TessSearchResultsComponent,
    TessSearchComponent,
    GearHomeComponent,
    GearSearchComponent,
    GearSearchResultsComponent,
    GearProfileComponent,
    EffectScoreComponent,
    RassHomeComponent,
    RassSearchComponent,
    RassSearchResultsComponent,
    RassProfileComponent,
    RiskMeterComponent,
    MiPublicHomeComponent,
    MiSecureHomeComponent,
    MiVerifyComponent,
    MiFileComponent

  ],
  imports: [
      BrowserModule,
        FormsModule,
        MomentModule,
        HttpClientModule,
        AngularFontAwesomeModule,
        LeafletModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            routerOptions
      ), 
        BrowserModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule        
  ],
  entryComponents:[NewsComponent,BlogComponent,DefaultComponent],
  providers: [
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
