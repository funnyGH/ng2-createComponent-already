import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutes } from './app.routes';

// 管道
import { ObjNgFor } from './filters/ngfor.pipe';

// 组件导入
import { AppComponent } from './app.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { TemplateGrammerComponent } from './components/template-grammer/template-grammer.component';
import { LifePeriodComponent } from './components/life-period/life-period.component';
import { ComponentInteracteComponent } from './components/component-interacte/component-interacte.component';
import { ComponentStyleComponent } from './components/component-style/component-style.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { ConstructDirectiveComponent } from './components/construct-directive/construct-directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { NavComponent } from './components/nav/nav.component';
import { EgDemoComponent } from './components/eg-demo/eg-demo.component';

// 指令引入
import { AdBannerComponent } from './components/dynamic-component/ad-banner.component';
import { HeroJobAdComponent } from './components/dynamic-component/hero-job-ad.component';
import { HeroProfileComponent } from './components/dynamic-component/hero-profile.component';
import { AdDirective } from './components/dynamic-component/ad.directive';
import { AdService } from './components/dynamic-component/ad.service';


@NgModule({
  imports: [
    BrowserModule,
    // RouterModule.forRoot(AppRoutes, { useHash: true }), // 带#号
    RouterModule.forRoot(AppRoutes),   // 不带#号
    HttpModule
  ],
  declarations: [
    AppComponent,
    ShowDataComponent,
    TemplateGrammerComponent,
    LifePeriodComponent,
    ComponentInteracteComponent,
    ComponentStyleComponent,
    DynamicComponentComponent,
    AttributeDirectiveComponent,
    ConstructDirectiveComponent,
    PipeComponent,
    NavComponent,
    EgDemoComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    ObjNgFor
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
