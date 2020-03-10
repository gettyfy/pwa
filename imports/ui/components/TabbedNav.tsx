import React from 'react';
import { AppIcon } from '/imports/ui/components'

export const TabbedNav = (): JSX.Element {
    return (
        <div>
            <AppIcon src="/icons/nav/dashboard.svg" />
            <AppIcon src="/icons/nav/users.svg" />
            <AppIcon src="/icons/nav/transactions.svg" />
            <AppIcon src="/icons/nav/settings.svg" />
        </div>
    )
}