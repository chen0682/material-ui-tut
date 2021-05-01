import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import {
  FormControlLabel,
  makeStyles,
  RadioGroup,
  Radio,
} from '@material-ui/core';

const useStyles = makeStyles({
  btn: {
    fontSize: 30,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom>
        Create a New Note
      </Typography>
      <Typography color='secondary' className={classes.title}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quis
        autem soluta maxime, perspiciatis modi natus nulla itaque cupiditate
        enim sint, tempore illum tenetur quas illo ut quos dolorum quasi! In cum
        id tenetur, nobis illo deserunt deleniti architecto ratione consectetur,
        pariatur, commodi sit quas nam consequatur ex voluptatum. Temporibus cum
        sequi aperiam natus quos dolor eum aspernatur eos perspiciatis illo.
        Ducimus. Dicta soluta illum natus odio laborum libero aut necessitatibus
        adipisci nihil? Tempore a atque neque veritatis dolores assumenda et,
        recusandae amet vel rerum commodi, magnam magni sunt, officiis eius
        expedita?
      </Typography>
      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Button type='submit' color='primary'>
        Submit
      </Button>
      <Button type='submit' color='secondary' variant='outlined'>
        Submit
      </Button>
      <Button
        // className={classes.btn}
        onClick={() => console.log('You clicked me')}
        type='submit'
        color='primary'
        variant='contained'
        // startIcon={<SendOutlinedIcon />}
        endIcon={<KeyboardArrowRightOutlinedIcon />}>
        Submit2
      </Button>
      <br />
      <br />
      <RadioGroup>
        <FormControlLabel value='money' control={<Radio />} label='Money' />
        <FormControlLabel value='todos' control={<Radio />} label='Todos' />
        <FormControlLabel
          value='reminders'
          control={<Radio />}
          label='Reminders'
        />
        <FormControlLabel value='work' control={<Radio />} label='Work' />
      </RadioGroup>
      {/* <AcUnitOutlinedIcon color='secondary' fontSize='small' />
      <AcUnitOutlinedIcon color='secondary' fontSize='large' />
      <AcUnitOutlinedIcon color='action' fontSize='small' />
      <AcUnitOutlinedIcon color='error' fontSize='small' />
      <AcUnitOutlinedIcon color='disabled' fontSize='small' /> */}
    </Container>
  );
}
