import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FrontpageComponent } from './body/frontpage/frontpage.component';
import { BbComponent } from './body/bb/bb.component';
import { BbPostComponent } from './body/bb/bb-post/bb-post.component';
import { BlogComponent } from './body/blog/blog.component';
import { BlogPostComponent } from './body/blog/blog-post/blog-post.component';
import { LogComponent } from './body/log/log.component';
import { PremotavanjeComponent } from './body/premotavanje/premotavanje.component';
import { PremotavanjePostsComponent } from './body/premotavanje/premotavanje-posts/premotavanje-posts.component';
import { MuzikaComponent } from './body/premotavanje/muzika/muzika.component';
import { MuzikaPostComponent } from './body/premotavanje/muzika/muzika-post/muzika-post.component';
import { KnjigeComponent } from './body/premotavanje/knjige/knjige.component';
import { KnjigePostComponent } from './body/premotavanje/knjige/knjige-post/knjige-post.component';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { TagsComponent } from './body/tags/tags.component';
import { PretragaComponent } from './body/pretraga/pretraga.component';

const routes: Routes = [
  {
    path: '',
    component: FrontpageComponent,
    pathMatch: 'full'
  },
  {
    path: 'b1t0v11bajt0v1',
    component: BbComponent,
    pathMatch: 'full'
  },
  {
    path: 'b1t0v11bajt0v1/:post_slug',
    component: BbPostComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog',
    component: BlogComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog/post/:post_slug',
    component: BlogPostComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog/page/:pageID',
    component: BlogComponent,
    pathMatch: 'full'
  },
  {
    path: 'log',
    component: LogComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje',
    component: PremotavanjeComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje/muzika',
    component: MuzikaComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje/muzika/page/:pageID',
    component: MuzikaComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje/muzika/:post_slug',
    component: MuzikaPostComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje/knjige',
    component: KnjigeComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje/knjige/:post_slug',
    component: KnjigePostComponent,
    pathMatch: 'full'
  },
  {
    path: 'premotavanje/:post_slug',
    component: PremotavanjePostsComponent,
    pathMatch: 'full'
  },
  {
    path: ':post_type/tagovi/:tag_name/:tag_id/:pageID',
    component: TagsComponent,
    pathMatch: 'full'
  },
  {
    path: 'tags/:tag_name/:tag_id',
    component: TagsComponent,
    pathMatch: 'full'
  },
    {
    path: 'pretraga/:searchItem',
    component: PretragaComponent,
    pathMatch: 'full'
  },
  {
    path: ':post_type/pretraga/:searchItem/:pageID',
    component: PretragaComponent,
    pathMatch: 'full'
  },
 {
   path: 'it-is-the-wrong-em-boyo',
   component: PageNotFoundComponent,
   pathMatch: 'full'
 },
 {
   path: '**',
   redirectTo: '/it-is-the-wrong-em-boyo',
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
