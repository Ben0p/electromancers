import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonToggleModule,
        MatTabsModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule

    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonToggleModule,
        MatTabsModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule
    ]
})

export class MaterialModule { }
