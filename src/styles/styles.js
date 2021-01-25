import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#00B7C3',
  },
  toolbar: {
    justifyContent: 'center',
  },
  content: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    maxWidth: 800,
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
