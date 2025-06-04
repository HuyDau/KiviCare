
import { useSnackbar, VariantType, ProviderContext } from 'notistack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import type { Namespace, TFunction } from 'i18next'
import ErrorMessageUtil from '../error/ErrorMessageUtil'

let useSnackbarRef: ProviderContext
let translator: TFunction<Namespace, unknown>;

export const SnackbarUtilsConfigurator: React.FC = () => {
    useSnackbarRef = useSnackbar()
    const { t } = useTranslation();
    translator = t;
    return null
}

export default {
    success(msg: string) {
        this.toast(msg, 'success')
    },
    warning(msg: string) {
        this.toast(msg, 'warning')
    },
    info(msg: string, { persist }: { persist?: boolean }) {
        this.toast(msg, 'info', persist)
    },
    error1(msg: string) {
        const errorContainer = document.querySelectorAll('.notistack-SnackbarContainer');
        if (errorContainer.length === 0) {
            this.toast(msg, 'error')
        }
    },
    error(errorCode: number) {
        this.toast(translator(ErrorMessageUtil.getMessage(errorCode)), 'error')
    },
    toast(msg: string, variant: VariantType = 'default', persist?: boolean) {
        useSnackbarRef.enqueueSnackbar(msg, { variant, persist })
    }
}
