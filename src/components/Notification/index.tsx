import type { SnackbarCloseReason } from '@material-ui/core';
import { useEffect, useState, createContext, useContext } from 'react';
import { Snackbar } from '@material-ui/core';
import NotificationAlert from 'components/NotificationAlert';
import { CheckRounded, ErrorOutline, Delete } from '@material-ui/icons';

const lightText: React.CSSProperties['color'] = 'hsl(0, 0%, 84%)';

const colors: ColorsObject = {
  dark: {
    bg: 'hsl(0, 0%, 16%)',
    color: lightText,
  },
  error: {
    bg: 'hsl(4, 70%, 45%)',
    color: lightText,
  },
};

const icons = {
  check: <CheckRounded />,
  error: <ErrorOutline />,
  trash: <Delete />,
};

export const NotificationContext = createContext<Context | null>(null);

export const useNotify = () => {
  const context = useContext(NotificationContext);
  return context;
};

export const NotificationProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [currentNotify, setCurrentNotify] = useState<undefined | Notify>(
    undefined,
  );
  const [displayNotify, setDisplayNotify] = useState<undefined | Notify>(
    undefined,
  );

  useEffect(() => {
    if (currentNotify && !displayNotify) {
      setDisplayNotify(currentNotify);
      setCurrentNotify(undefined);
      setOpen(true);
    } else if (currentNotify && displayNotify && open) {
      setOpen(false);
    }
  }, [open, currentNotify, displayNotify]);

  const value: Context = (options): void => {
    const defOptions: Required<Options> = {
      message: '',
      color: 'dark',
      icon: 'check',
      ...options,
    };

    const { message, color, icon } = defOptions;

    setCurrentNotify({ message, color, icon, key: Date.now() });
  };

  const handleClose: HandleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onExited = (node: HTMLElement) => {
    setDisplayNotify(undefined);
  };

  const icon = displayNotify && icons[displayNotify.icon];

  const style: React.CSSProperties = {
    backgroundColor: displayNotify && colors[displayNotify.color].bg,
    color: displayNotify && colors[displayNotify.color].color,
  };

  return (
    <>
      <Snackbar
        className="snackbar"
        key={displayNotify && displayNotify.key}
        open={open}
        onClose={handleClose}
        TransitionProps={{ onExited }}
        transitionDuration={250}
        autoHideDuration={3000}
      >
        <NotificationAlert
          message={displayNotify && displayNotify.message}
          icon={icon}
          style={style}
        />
      </Snackbar>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </>
  );
};

interface ColorType {
  bg: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
}

type ColorsObject = {
  [P in Colors]: ColorType;
};

type Colors = 'dark' | 'error';

type Icons = keyof typeof icons;

interface Notify {
  message: string;
  color: Colors;
  icon: Icons;
  key: number;
}

export interface Context {
  (options?: Options): void;
}

interface HandleClose {
  (e: React.SyntheticEvent | MouseEvent, reason?: SnackbarCloseReason): void;
}

type Options = Partial<Pick<Notify, 'message' | 'color' | 'icon'>>;
