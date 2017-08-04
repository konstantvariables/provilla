import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCase } from "./title-case.pipe"

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TitleCase],
    exports:[TitleCase],
    providers: [TitleCase]
})
export class SharedPipesModule {
  static forRoot() {
      return {
          ngModule: SharedPipesModule,
          providers: [],
      };
   }
 }
