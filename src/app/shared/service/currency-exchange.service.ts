import { Injectable, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { MappedCurrencyRateObject } from '../interface/exchange-rates.model';

export interface PeriodicHistoryElement {
    id: number;
    date: string;
    time: string;
    exchangeRate: string;
    pureExchangeRate?: number;
    creationDate?: string;
    fromCurrency?: string;
    toCurrency?: string;
    amount?: number;
}

@Injectable()
export class CurrencyExchangeService implements OnInit {
    converterForm: UntypedFormGroup = new UntypedFormGroup({
        amountControl: new UntypedFormControl('', [Validators.required]),
        fromControl: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
        toControl: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
    });

    exchangeRates: MappedCurrencyRateObject[];

    fromCurrencies: string[] = [];
    toCurrencies: string[] = [];

    currentDate: string;
    currentTime: string;
    isValid = false;
    isServiceReferral = false;

    static toTwoDigits(givenNumber: number) {
        return givenNumber > 9 ? `${givenNumber}` : `0${givenNumber}`;
    }

    constructor() {}

    ngOnInit() {}



}
