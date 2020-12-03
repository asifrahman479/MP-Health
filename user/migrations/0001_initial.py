# Generated by Django 3.0.3 on 2020-12-03 00:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Subject', models.CharField(blank=True, max_length=96)),
                ('StartTime', models.DateTimeField(blank=True)),
                ('EndTime', models.DateTimeField(blank=True)),
                ('IsAllDay', models.BooleanField(default=False)),
                ('IsReadonly', models.BooleanField(default=False)),
                ('RoomId', models.IntegerField(blank=True, default=1)),
                ('ResourceId', models.IntegerField(blank=True, default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Clinic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ClinicName', models.CharField(blank=True, max_length=96)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DoctorName', models.CharField(blank=True, max_length=96)),
                ('ClinicID', models.TextField(blank=True)),
                ('Email', models.TextField(blank=True)),
                ('Phone', models.CharField(blank=True, max_length=12)),
                ('JobTitle', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PatientName', models.CharField(blank=True, max_length=96)),
                ('Email', models.TextField(blank=True)),
                ('Phone', models.CharField(blank=True, max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name='DocAvailability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('StartTime', models.DateTimeField(blank=True)),
                ('EndTime', models.DateTimeField(blank=True)),
                ('IsFree', models.BooleanField(default=True)),
                ('DoctorID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.Doctor')),
            ],
        ),
    ]
