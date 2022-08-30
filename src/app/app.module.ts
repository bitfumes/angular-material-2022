import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { PostComponent } from './blog/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SingleBlogComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
