import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { AiOutlineStar } from 'react-icons/ai';
import { Tooltip } from '@mui/material';
import '../assets/css/style.css';

const image_src = {
  'یارنوین سیتی': require('../assets/images/yarnovin_city.png'),
  'یارنوین': require('../assets/images/Yarnovinlogo.png'),
  'انجمن یارنوین': require('../assets/images/forum_yarnovin.png'),
  'کدیار وب': require('../assets/images/codeyar_web.png'),
  'سرویس هوشیار': require('../assets/images/hooshyar_bot.png'),
  'سرویس کدیار': require('../assets/images/codeyar_bot.png')
}

const StarIcon = () => {
  return (
    <Box display={'inline-block'}>
      <Tooltip title={<b>محبوب کاربران</b>} placement='top' arrow>
        <IconButton>
          <AiOutlineStar size={20} color={"gold"} />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default function YarnovinProject(Props) {
  return (
    <>
      <Card style={{ height: '100%' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image_src[Props.image_src]}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight='bold' display='inline-block' fontFamily='VazirMatnLight'>
            {Props.project_name}{Props.is_popular && true ? <StarIcon /> : ''}{Props.is_incoming && true ? ' (بزودی) ' : ''}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily='VazirMatnLight'>
            {Props.project_bio}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button size="large" disabled={Props.is_incoming && true ? true : false}>
            <Typography fontWeight='bold' fontFamily='VazirMatnLight'>
              <Link href={Props.project_src} style={{ textDecoration: 'none' }}>
                مشاهده
              </Link>
            </Typography>
          </Button>
        </CardActions>
      </Card >
    </>
  );
}