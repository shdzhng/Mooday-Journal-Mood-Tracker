import React, { useMemo, useState, useEffect } from 'react';
import moment from 'moment';
import NavigationBar from '../../features/navBar/NavBar';
import GoogleMap from '../../features/analytics/Map';
import BarChart from '../../features/analytics/BarChart';
import LineChart from '../../features/analytics/LineChart';
import QuickInfo from '../../features/analytics/QuickInfo';
import { Card, CardContent, Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { CounterObj, QuickInfoData } from '../../constants/months';

function AnalyticView() {
  const entries = useSelector(({ journal }) => journal.entries);
  const [w, setW] = useState(window.innerWidth);
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'));

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentMonth = moment().format('M');

  const records = useMemo(() => {
    const returnedRecords = {};

    entries.forEach((entry) => {
      const monthOfEntry = moment.unix(entry.date).format('MMMM');
      const yearOfEntry = moment.unix(entry.date).format('YYYY');
      const feeling = entry.feeling;
      const entryLength = entry.entry.split(/\b\S+\b/g).length - 1;

      if (returnedRecords[yearOfEntry] === undefined)
        returnedRecords[yearOfEntry] = new CounterObj();

      returnedRecords[yearOfEntry][feeling].entryCount[monthOfEntry]++;
      returnedRecords[yearOfEntry][feeling].wordCount[monthOfEntry] +=
        entryLength;
    });

    return returnedRecords;
  }, [entries]);

  if (w > 500) {
    return (
      <>
        <NavigationBar />
        <Box sx={{ flexGrow: 1, mx: '3rem', my: '1rem' }}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card sx={{ height: 300 }}>
                <CardContent sx={{ height: 250 }}>
                  <QuickInfo
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                    records={records}
                    w={w}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={8}>
              <Card sx={{ height: 300 }}>
                <CardContent sx={{ height: 275 }}>
                  <LineChart
                    records={records}
                    selectedYear={selectedYear}
                    currentMonth={currentMonth}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={5}>
              <Card sx={{ height: 430 }}>
                <CardContent sx={{ height: 400 }}>
                  <BarChart
                    records={records}
                    selectedYear={selectedYear}
                    currentMonth={currentMonth}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={7}>
              <GoogleMap selectedYear={selectedYear} />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <>
      <NavigationBar />
      <Box sx={{ flexGrow: 1, mx: '3rem', my: '1rem' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 250 }}>
                <QuickInfo
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  records={records}
                  w={w}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 275 }}>
                <LineChart
                  records={records}
                  selectedYear={selectedYear}
                  currentMonth={currentMonth}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ height: 430 }}>
              <CardContent sx={{ height: 400 }}>
                <BarChart
                  records={records}
                  selectedYear={selectedYear}
                  currentMonth={currentMonth}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <GoogleMap selectedYear={selectedYear} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AnalyticView;
