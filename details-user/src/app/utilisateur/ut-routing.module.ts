import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PageAdminComponent} from '../utilisateur/page-admin/page-admin.component';
import {SearchComponent} from '../utilisateur/search/search.component';
import {DetailsUtilisateurComponent} from '../utilisateur/details-utilisateur/details-utilisateur.component';

@NgModule({
    imports : [
        RouterModule.forChild([
            {path : 'admin',
            component : PageAdminComponent,

            children : [
                {
                    path : "recherche",
                    component : SearchComponent,
                },
                {
                    path : 'details',
                    component : DetailsUtilisateurComponent,
                },
            ],
            },

        ])

    ],
    exports :[RouterModule],
})
export class utRoutingModule {}