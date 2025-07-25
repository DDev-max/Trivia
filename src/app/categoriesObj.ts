import { Type } from '@angular/core';
import { HistorySVGComponent } from './history-svg/history-svg.component';
import { GeoSVGComponent } from './geo-svg/geo-svg.component';
import { SportsSVGComponent } from './sports-svg/sports-svg.component';
import { FoodSVGComponent } from './food-svg/food-svg.component';
import { GeneralSVGComponent } from './general-svg/general-svg.component';
import { EntertainmentSVGComponent } from './entertainment-svg/entertainment-svg.component';
import { CustomSVGComponent } from './custom-svg/custom-svg.component';

export type CategoryKey =
  | 'entertainment'
  | 'custom'
  | 'food'
  | 'history'
  | 'general'
  | 'sports'
  | 'geography';

export interface CategoriesInfo {
  name: CategoryKey;
  bgImgSrc: string;
  iconComponent: Type<any>;
  anchorClassName: string;
  textColor: string;
}

export const categoriesNames: readonly CategoryKey[] = [
  'custom',
  'entertainment',
  'food',
  'general',
  'history',
  'sports',
  'geography',
];

export const categoriesObj: readonly CategoriesInfo[] = [
  {
    name: 'history',
    bgImgSrc: '/categoriesImgs/history.webp',
    anchorClassName: 'historyLink',
    textColor: 'white',
    iconComponent: HistorySVGComponent,
  },
  {
    name: 'geography',
    bgImgSrc: '/categoriesImgs/geo.webp',
    anchorClassName: 'geographyLink',
    textColor: 'white',
    iconComponent: GeoSVGComponent,
  },
  {
    name: 'sports',
    bgImgSrc: '/categoriesImgs/sports.webp',
    anchorClassName: 'sportsLink',
    textColor: 'white',
    iconComponent: SportsSVGComponent,
  },
  {
    name: 'general',
    bgImgSrc: '/categoriesImgs/general.webp',
    anchorClassName: 'generalCatgryLink',
    textColor: 'black',
    iconComponent: GeneralSVGComponent,
  },
  {
    name: 'food',
    bgImgSrc: '/categoriesImgs/food.webp',
    anchorClassName: 'foodLink',
    textColor: 'white',
    iconComponent: FoodSVGComponent,
  },
  {
    name: 'entertainment',
    bgImgSrc: '/categoriesImgs/entertainment.webp',
    anchorClassName: 'entertainmentLink',
    textColor: 'black',
    iconComponent: EntertainmentSVGComponent,
  },
  {
    name: 'custom',
    bgImgSrc:
      'm21.121 2.707c-1.1716-1.1716-3.071-1.1716-4.2426 0l-1.6798 1.6798-7.906 7.906c-0.12816 0.1282-0.21907 0.2888-0.26303 0.4646l-1 4c-0.0852 0.3408 0.01465 0.7013 0.26303 0.9496 0.24838 0.2484 0.60887 0.3483 0.94965 0.2631l4-1c0.1759-0.044 0.3364-0.1349 0.4646-0.2631l9.5858-9.5857c1.1716-1.1716 1.1716-3.0711 0-4.2426l-0.1716-0.17157zm-2.8284 1.4142c0.3905-0.39052 1.0237-0.39052 1.4142 0l0.1716 0.17157c0.3905 0.39053 0.3905 1.0237 0 1.4142l-1.0165 1.0165-1.5554-1.6162 0.9861-0.98612zm-2.4006 2.4006 1.5554 1.6162-6.9589 6.959-2.1144 0.5286 0.52859-2.1144 6.9893-6.9894zm-11.892 1.4781c0-0.55228 0.44772-1 1-1h5c0.5523 0 1-0.44771 1-1 0-0.55228-0.4477-1-1-1h-5c-1.6568 0-3 1.3432-3 3v11c0 1.6569 1.3432 3 3 3h11c1.6569 0 3-1.3431 3-3v-5c0-0.5522-0.4477-1-1-1s-1 0.4478-1 1v5c0 0.5523-0.4477 1-1 1h-11c-0.55228 0-1-0.4477-1-1v-11z',
    anchorClassName: 'customLink',
    textColor: 'white',
    iconComponent: CustomSVGComponent,
  },
];
