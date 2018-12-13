import { NgModule } from "@angular/core";
import { SimpleDirective } from './01-simple-directive/simple-directive.component';
import { MyColorDirective } from './01-simple-directive/my-color.directive';

@NgModule({
    declarations: [
        SimpleDirective,
        MyColorDirective
    ]
})
export class AttributeDirectives { }