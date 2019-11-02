import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './body/frontpage/frontpage.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { BbComponent } from './body/bb/bb.component';
import { BlogComponent } from './body/blog/blog.component';
import { PremotavanjeComponent } from './body/premotavanje/premotavanje.component';
import { LogComponent } from './body/log/log.component';
import { BbPostComponent } from './body/bb/bb-post/bb-post.component';
import { BlogPostComponent } from './body/blog/blog-post/blog-post.component';
import { PremotavanjePostsComponent } from './body/premotavanje/premotavanje-posts/premotavanje-posts.component';
import { MuzikaComponent } from './body/premotavanje/muzika/muzika.component';
import { KnjigeComponent } from './body/premotavanje/knjige/knjige.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { MuzikaPostComponent } from './body/premotavanje/muzika/muzika-post/muzika-post.component';
import { KnjigePostComponent } from './body/premotavanje/knjige/knjige-post/knjige-post.component';
import { TagsComponent } from './body/tags/tags.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { PretragaComponent } from './body/pretraga/pretraga.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    FrontpageComponent,
    AuthenticationComponent,
    PostListComponent,
    BbComponent,
    BlogComponent,
    PremotavanjeComponent,
    LogComponent,
    BbPostComponent,
    BlogPostComponent,
    PremotavanjePostsComponent,
    MuzikaComponent,
    KnjigeComponent,
    PageNotFoundComponent,
    MuzikaPostComponent,
    KnjigePostComponent,
    TagsComponent,
    SidebarComponent,
    PretragaComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

