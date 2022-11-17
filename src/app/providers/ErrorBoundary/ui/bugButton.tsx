import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const toggle = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) { throw new Error(); }
    }, [error]);

    return (
        <Button
            onClick={toggle}
        >
            { t('Вызываем ошибку')}
        </Button>
    );
};
