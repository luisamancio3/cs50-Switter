import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatProgressSpinnerModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTreeModule } from "@angular/material";
import { MatBadgeModule } from "@angular/material/badge";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from "@angular/material/sidenav";
const Material = [
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatChipsModule,
  MatOptionModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSelectModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTreeModule,
  MatFormFieldModule,
  MatStepperModule,
  MatBadgeModule
];

@NgModule({
  imports: [CommonModule, Material, MatFormFieldModule, MatToolbarModule],
  exports: [Material, MatFormFieldModule, MatToolbarModule],
})
export class MaterialModule {}
