import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonModule, CardModule, CheckboxModule, ConfirmDialogModule,
  ContextMenuModule,
  DialogModule,
  DropdownModule, FileUploadModule, InputMaskModule, InputTextareaModule, InputTextModule,
  MultiSelectModule, PanelModule, PickListModule, RadioButtonModule,
  SliderModule, TableModule,
  TabViewModule,
  ToastModule, ToolbarModule, TooltipModule
} from 'primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DigitCheckboxModule } from './digit-checkbox/digit-checkbox.component';
import { DigitDropdownModule } from './digit-dropdown/digit-dropdown.component';
import { FormedTableModule } from './formed-table/formed-table';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    CommonModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
    TooltipModule,
    InputTextareaModule,
    TabViewModule,
    FileUploadModule,
    PickListModule,
    ToastModule,
    ToolbarModule,
    CardModule,
    DropdownModule,
    CheckboxModule,
    ToastModule,
    ButtonModule,
    TableModule,
    InputMaskModule,
    RadioButtonModule,
    // Customized
    DigitCheckboxModule,
    DigitDropdownModule,
    FormedTableModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    PanelModule,
    TooltipModule,
    InputTextareaModule,
    TabViewModule,
    FileUploadModule,
    PickListModule,
    ToastModule,
    ToolbarModule,
    CardModule,
    CheckboxModule,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    InputMaskModule,
    RadioButtonModule,
    // Customized
    DigitCheckboxModule,
    DigitDropdownModule,
    FormedTableModule
  ],
  declarations: []
})
export class UiKitModule {}
